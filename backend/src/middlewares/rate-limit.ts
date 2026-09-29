import type { Request, Response } from "express";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30;

const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(_req: Request, res: Response, next: () => void): void {
  const now = Date.now();
  const key = _req.ip ?? "unknown";
  const entry = hits.get(key);

  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    next();
    return;
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS) {
    res.status(429).json({ erro: "Muitas requisições. Tente novamente em instantes." });
    return;
  }

  next();
}
