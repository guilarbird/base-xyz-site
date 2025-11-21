# Guia Completo de Deploy - Base XYZ

## ✅ Passo 1: Repositório GitHub (CONCLUÍDO)

O código já está no GitHub:
- **Repositório**: https://github.com/guilarbird/base-xyz-site
- **Branch**: main
- **Status**: Todos os arquivos commitados e sincronizados

---

## 🚀 Passo 2: Deploy no Vercel

### 2.1 Importar Projeto

1. Acesse https://vercel.com e faça login
2. Clique em **"Add New Project"**
3. Selecione **"Import Git Repository"**
4. Escolha o repositório `guilarbird/base-xyz-site`

### 2.2 Configurar Build

O Vercel deve detectar automaticamente as configurações do `vercel.json`, mas confirme:

- **Framework Preset**: Vite
- **Root Directory**: `./` (raiz)
- **Build Command**: `cd client && pnpm install && pnpm build`
- **Output Directory**: `client/dist`
- **Install Command**: `pnpm install`

### 2.3 Adicionar Variáveis de Ambiente

Na seção **Environment Variables**, adicione:

```
VITE_CIRCLE_API_TOKEN=seu_token_admin_v1_aqui
VITE_CIRCLE_COMMUNITY_ID=seu_community_id_aqui
VITE_CIRCLE_BASE_URL=https://app.circle.so/api/v1
VITE_APP_TITLE=Base XYZ
VITE_APP_LOGO=/logo.svg
```

**Onde encontrar os valores:**
- `VITE_CIRCLE_API_TOKEN`: Arquivo `credentials.json` que você me enviou (campo `admin_v1`)
- `VITE_CIRCLE_COMMUNITY_ID`: Arquivo `credentials.json` (campo `community_id`)

### 2.4 Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (leva ~2-3 minutos)
3. Vercel vai gerar uma URL temporária tipo `base-xyz-site.vercel.app`

---

## 🌐 Passo 3: Conectar Domínio base-xyz.com

### 3.1 Adicionar Domínio no Vercel

1. No projeto deployado, vá em **Settings → Domains**
2. Clique em **"Add Domain"**
3. Digite `base-xyz.com` e clique em **"Add"**
4. Repita para `www.base-xyz.com`

### 3.2 Configurar DNS

O Vercel vai mostrar instruções específicas. Geralmente são:

**Para domínio apex (base-xyz.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Para subdomínio www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Onde configurar:**
- Acesse o painel do seu provedor de domínio (GoDaddy, Namecheap, Cloudflare, etc)
- Vá em **DNS Settings** ou **Manage DNS**
- Adicione/edite os records acima
- Salve as mudanças

### 3.3 Aguardar Propagação

- DNS pode levar de 5 minutos a 48 horas para propagar
- Vercel vai verificar automaticamente e ativar SSL/HTTPS
- Quando estiver pronto, você verá um ✅ verde ao lado do domínio

---

## ✅ Passo 4: Validação Final

Após o deploy e configuração do domínio, teste:

1. **Homepage**: https://base-xyz.com
   - Deve carregar o hero com a garrafa
   - Botão "Participar Agora" deve abrir o popup informativo

2. **Cadastro**: https://base-xyz.com/cadastro
   - Preencher formulário completo
   - Verificar se o membro aparece no Circle.so

3. **Navegação**:
   - `/desafio` - Página do Desafio da Garrafa
   - `/jornada` - Explicação das trilhas
   - `/academia` - Academia EdTech
   - `/faq` - Perguntas frequentes

4. **Integração Circle.so**:
   - Link "Entrar" no header deve levar para `www.base-xyz.com` (Circle)
   - Cadastro deve criar membro com custom fields

---

## 🔄 Deploy Automático

Agora, sempre que você fizer mudanças:

1. Edite os arquivos localmente ou via GitHub
2. Faça commit e push para a branch `main`
3. Vercel detecta automaticamente e faz deploy em ~2 minutos
4. Mudanças vão ao ar em https://base-xyz.com

---

## 📞 Suporte

Se tiver problemas:

1. **Build falhou**: Verifique logs no Vercel Dashboard
2. **Domínio não funciona**: Aguarde propagação DNS (use https://dnschecker.org)
3. **Cadastro não funciona**: Verifique variáveis de ambiente no Vercel
4. **Erro 404**: Confirme que `vercel.json` tem as rewrites configuradas

---

## 🎉 Pronto!

Seu site está no ar em **https://base-xyz.com** 🚀

Próximos passos recomendados:
1. Testar cadastro real e verificar no Circle.so
2. Adicionar Google Analytics
3. Configurar email marketing para newsletter
