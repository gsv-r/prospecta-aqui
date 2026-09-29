import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "O nome é obrigatório." })
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
    email: z
      .string()
      .min(1, { message: "O email é obrigatório." })
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Esse email não parece válido." }),
    password: z
      .string()
      .min(1, { message: "A senha é obrigatória" })
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
    confirmPassword: z.string().min(1, {
      message: "Digite novamente sua senha.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
