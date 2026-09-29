export interface Negocio {
  id: string;
  nome: string;
  telefone: string | null;
  endereco: string | null;
  avaliacao: number | null;
  quantidadeAvaliacoes: number | null;
  site: string | null;
  googleMaps: string | null;
  possuiSite: boolean;
}

export interface GooglePlace {
  id?: string;
  displayName?: { text?: string };
  nationalPhoneNumber?: string;
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  websiteUri?: string;
  googleMapsUri?: string;
}

export interface GooglePlacesResponse {
  places?: GooglePlace[];
}
