import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório." })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Esse email não parece válido." }),
  password: z
    .string()
    .min(1, { message: "A senha é obrigatória." })
    .min(8, { message: "Deve ter pelo menos 8 caracteres." }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
