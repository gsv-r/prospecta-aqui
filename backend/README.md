# Prospecta Aqui — Backend

API REST do **Prospecta Aqui**, um sistema de geração de leads para prospecção B2B. Responsável por consultar empresas no Google Places API (Text Search New) e retornar os dados formatados.

## Requisitos

- [Bun](https://bun.sh/) 1.0+
- Chave da Google Places API

## Instalação

```bash
bun install
```

## Configuração

Copie o arquivo de exemplo e preencha com suas variáveis:

```bash
cp .env.example .env
```

### Variáveis de ambiente

| Variável               | Descrição                              |
| ---------------------- | -------------------------------------- |
| `PORT`                 | Porta do servidor (padrão: `3000`)     |
| `GOOGLE_PLACES_API_KEY` | Chave da Google Places API (obrigatória) |
| `CORS_ORIGIN`          | Origem permitida no CORS               |

### Como obter a Google Places API Key

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um projeto (ou selecione um existente).
3. Ative a **Places API (New)**.
4. Crie uma credencial em **APIs e serviços > Credenciais**.
5. Restrinja a chave para a Places API (recomendado).
6. Copie a chave para o `.env`.

## Execução

### Desenvolvimento

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Produção

```bash
bun run start
```

## Scripts

| Comando         | Descrição           |
| --------------- | ------------------- |
| `bun run dev`  | Servidor de desenvolvimento |
| `bun run build`| Build de produção   |
| `bun run start`| Servidor de produção |
| `bun run lint` | Análise estática    |

## Endpoints

### GET /health

Health check.

**Resposta:**

```json
{ "status": "ok" }
```

### POST /api/negocios/buscar

Busca empresas por segmento e localidade.

**Body:**

```json
{
  "segmento": "restaurante",
  "localidade": "Barretos - SP"
}
```

**Resposta (200):**

```json
[
  {
    "id": "ChIJ...",
    "nome": "Empresa Exemplo",
    "telefone": "(17) 3333-4444",
    "endereco": "Rua Exemplo, 100 - Barretos - SP",
    "avaliacao": 4.7,
    "quantidadeAvaliacoes": 152,
    "site": "https://www.exemplo.com.br",
    "googleMaps": "https://www.google.com/maps/...",
    "possuiSite": true
  }
]
```

**Exemplo com curl:**

```bash
curl -X POST http://localhost:3000/api/negocios/buscar \
  -H "Content-Type: application/json" \
  -d '{
    "segmento": "restaurante",
    "localidade": "Barretos - SP"
  }'
```

## Tratamento de erros

| Status | Descrição                                  |
| ------ | ------------------------------------------ |
| 400    | Body inválido (campos ausentes ou curtos)  |
| 404    | Rota não encontrada                        |
| 500    | Erro interno do servidor                   |
| 502    | Falha ao consultar o Google Places        |

**Exemplo de erro 400:**

```json
{ "erro": "segmento e localidade são obrigatórios" }
```

**Exemplo de erro 502:**

```json
{ "erro": "Não foi possível consultar o Google Places" }
```

## Estrutura do projeto

```text
backend/
├── src/
│   ├── app.ts                  # Configuração do Express
│   ├── server.ts               # Entry point do servidor
│   ├── routes/
│   │   └── negocio.routes.ts   # Rotas de negócios
│   ├── controllers/
│   │   └── negocio.controller.ts
│   ├── services/
│   │   └── google-places.service.ts
│   ├── schemas/
│   │   └── negocio.schema.ts
│   ├── types/
│   │   └── negocio.ts
│   ├── config/
│   │   └── env.ts
│   └── middlewares/
│       └── error-handler.ts
├── .env.example
├── .gitignore
├── bun.lock
├── eslint.config.js
├── package.json
├── prettier.config.js
└── tsconfig.json
```
