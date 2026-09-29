# Prospecta Aqui — Frontend

Interface web do **Prospecta Aqui**, um sistema de geração de leads para prospecção B2B.

## Requisitos

- [Bun](https://bun.sh/) 1.0+
- Node.js 18+ (opcional, caso não use Bun)

## Instalação

```bash
bun install
```

## Configuração

Copie o arquivo de exemplo e preencha com suas variáveis:

```bash
cp .env.example .env.local
```

### Variáveis de ambiente

| Variável | Descrição |
| -------- | --------- |
| `NEXT_PUBLIC_API_URL` | URL do backend (padrão: `http://localhost:3000`) |

## Execução

### Desenvolvimento

```bash
bun run dev
```

O servidor sobe em `http://localhost:3000`.

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

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** (componentes)
- **React Hook Form** + **Zod** (validação de formulários)
- **Bun** (package manager)

## Estrutura do projeto

```text
frontend/
├── app/                    # Rotas (App Router)
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   ├── login/page.tsx      # Página de login
│   └── signup/page.tsx     # Página de cadastro
├── components/
│   ├── home/               # Componentes da landing page
│   ├── login/              # Formulário de login
│   ├── signup/             # Formulário de cadastro
│   ├── ui/                 # Componentes shadcn/ui
│   ├── logo.tsx            # Logo
│   └── google-button.tsx   # Botão de login Google
├── hooks/
│   └── use-mobile.ts       # Hook para detectar mobile
├── lib/
│   └── utils.ts            # Funções utilitárias
├── zod/
│   ├── login.ts            # Schema de validação do login
│   └── signup.ts           # Schema de validação do cadastro
├── .env.example            # Exemplo de variáveis de ambiente
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```
