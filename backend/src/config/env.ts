import dotenv from "dotenv";

dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    console.error(`[ERRO] Variável de ambiente obrigatória ausente: ${key}`);
    process.exit(1);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 3000),
  googlePlacesApiKey: requireEnv("GOOGLE_PLACES_API_KEY"),
  corsOrigins: (process.env.CORS_ORIGIN ?? "http://localhost:5173")
    .split(",")
    .map((o) => o.trim()),
};
