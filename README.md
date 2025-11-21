# Base XYZ - Landing Page

Landing page oficial da Base XYZ, comunidade de elite para creators e builders na economia digital.

## 🚀 Deploy

Este projeto está configurado para deploy automático no Vercel.

### Configuração no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New Project"
3. Importe o repositório `guilarbird/base-xyz-site`
4. Configure as variáveis de ambiente:
   - `VITE_CIRCLE_API_TOKEN`: Token da API do Circle.so
   - `VITE_CIRCLE_COMMUNITY_ID`: ID da comunidade no Circle.so
   - `VITE_CIRCLE_BASE_URL`: `https://app.circle.so/api/v1`
5. Clique em "Deploy"

### Domínio

Após o deploy, configure o domínio `base-xyz.com`:

1. No Vercel, vá em Settings → Domains
2. Adicione `base-xyz.com` e `www.base-xyz.com`
3. Configure os DNS records no seu provedor:
   - `A` record: `76.76.21.21`
   - `CNAME` www: `cname.vercel-dns.com`

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Rodar dev server
cd client && pnpm dev

# Build para produção
cd client && pnpm build
```

## 📦 Estrutura

- `/client` - Frontend React + Vite
- `/circle-assets` - Assets visuais para Circle.so
- `/circle-content-*.md` - Conteúdo para posts do Circle.so
- `/whitepaper-jornada-base-xyz.md` - Documento estratégico da jornada

## 🔗 Links

- **Site**: https://base-xyz.com
- **Comunidade**: https://www.base-xyz.com (Circle.so)
- **GitHub**: https://github.com/guilarbird/base-xyz-site

## 📝 Licença

© 2025 Base XYZ. Todos os direitos reservados.
