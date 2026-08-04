# CSA — Painel de Alunos

Dashboard de gestão de alunos CSA, conectado ao Supabase via Edge Function.

## Estrutura

```
csa-dashboard/
├── api/
│   └── alunos.js       ← Serverless function (chama o Supabase)
├── public/
│   └── index.html      ← Frontend do painel
├── vercel.json         ← Configuração da Vercel
└── README.md
```

## Variável de ambiente (obrigatória na Vercel)

| Nome | Valor |
|---|---|
| `CON_SECRET` | `csa-con-2026-chave-secreta-xK9mP3qL` |

## Deploy

1. Suba este repositório no GitHub
2. Conecte na Vercel (vercel.com → New Project → Import do GitHub)
3. Adicione a variável de ambiente `CON_SECRET`
4. Deploy automático

## Atualização dos dados

Basta atualizar a tabela `alunos_ativos` no Supabase.
O painel busca os dados em tempo real ao carregar e ao clicar em "Atualizar".
