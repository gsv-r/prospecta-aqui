# Prospecta Aqui — Frontend

Frontend do **Prospecta Aqui**, um sistema de geração de leads para prospecção B2B.

## O que faz

Permite buscar empresas por segmento e cidade, visualizar os dados (nome, telefone, site, endereço) e exportar os leads.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** (componentes)
- **React Hook Form** + **Zod** (validação de formulários)
- **Bun** (package manager)

## Scripts

```bash
bun run dev      # Desenvolvimento
bun run build    # Build de produção
bun run start    # Servidor de produção
bun run lint     # Análise estática
```

## Estrutura

```
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

## Variáveis de ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env.local
```

## Desenvolvimento

```bash
bun install
bun run dev
```

O servidor sobe em `http://localhost:3000`.

## Licença

Prospecta Aqui
