import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/api-error";

export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({ erro: "Rota não encontrada" });
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  console.error(`[ERRO] ${err.message}`);

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ erro: err.message });
    return;
  }

  res.status(500).json({ erro: "Erro interno do servidor" });
}
