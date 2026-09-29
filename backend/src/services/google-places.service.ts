import { env } from "../config/env";
import { ApiError } from "../errors/api-error";
import type { BuscarNegocioInput } from "../schemas/negocio.schema";
import type { GooglePlacesResponse, Negocio } from "../types/negocio";

const GOOGLE_PLACES_URL =
  "https://places.googleapis.com/v1/places:searchText";
const TIMEOUT_MS = 8000;

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.nationalPhoneNumber",
  "places.formattedAddress",
  "places.rating",
  "places.userRatingCount",
  "places.websiteUri",
  "places.googleMapsUri",
].join(",");

export async function buscarNegocios(
  input: BuscarNegocioInput,
): Promise<Negocio[]> {
  const textQuery = `${input.segmento} em ${input.localidade}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(GOOGLE_PLACES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": env.googlePlacesApiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
      body: JSON.stringify({ textQuery, pageSize: 20 }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error(
        `[ERRO] Google Places respondeu com status ${response.status}`,
      );
      throw new ApiError(502, "Falha ao consultar o Google Places");
    }

    const data = (await response.json()) as GooglePlacesResponse;

    if (!data.places || !Array.isArray(data.places)) {
      console.error("[ERRO] Resposta inesperada da Google Places API");
      throw new ApiError(502, "Resposta inesperada da Google Places");
    }

    return data.places.map((place) => ({
      id: place.id ?? "",
      nome: place.displayName?.text ?? "",
      telefone: place.nationalPhoneNumber ?? null,
      endereco: place.formattedAddress ?? null,
      avaliacao: place.rating ?? null,
      quantidadeAvaliacoes: place.userRatingCount ?? null,
      site: place.websiteUri ?? null,
      googleMaps: place.googleMapsUri ?? null,
      possuiSite: Boolean(place.websiteUri),
    }));
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    if (error instanceof Error && error.name === "AbortError") {
      console.error("[ERRO] Timeout ao consultar o Google Places API");
      throw new ApiError(504, "Timeout ao consultar o Google Places");
    }
    console.error("[ERRO] Falha na comunicação com o Google Places API");
    throw new ApiError(502, "Não foi possível consultar o Google Places");
  } finally {
    clearTimeout(timeout);
  }
}
