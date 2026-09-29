import { z } from "zod";

export const buscarNegocioSchema = z.object({
  segmento: z
    .string()
    .trim()
    .min(2, "segmento deve ter no mínimo 2 caracteres"),
  localidade: z
    .string()
    .trim()
    .min(2, "localidade deve ter no mínimo 2 caracteres"),
});

export type BuscarNegocioInput = z.infer<typeof buscarNegocioSchema>;
