import type { NextFunction, Request, Response } from "express";
import { buscarNegocios } from "../services/google-places.service";
import { buscarNegocioSchema } from "../schemas/negocio.schema";

export async function buscar(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const parsed = buscarNegocioSchema.safeParse(req.body);

  if (!parsed.success) {
    const detalhes = parsed.error.issues.map((i) => ({
      campo: i.path.join("."),
      mensagem: i.message,
    }));
    res.status(400).json({ erro: "Dados inválidos", detalhes });
    return;
  }

  try {
    const negocios = await buscarNegocios(parsed.data);
    res.status(200).json(negocios);
  } catch (error) {
    next(error);
  }
}
