# 🚀 Guia de Deploy na Vercel

Este guia contém instruções específicas para fazer o deploy do seu portfolio na Vercel.

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Projeto versionado no Git (GitHub, GitLab, Bitbucket)
- Node.js instalado localmente

## 🚀 Método 1: Deploy via Dashboard da Vercel (Recomendado)

### 1. Acesse o Dashboard da Vercel
- Vá para [vercel.com](https://vercel.com)
- Faça login com sua conta GitHub/GitLab/Bitbucket

### 2. Importe o Projeto
- Clique em "New Project"
- Selecione o repositório do seu portfolio
- Clique em "Import"

### 3. Configure o Projeto
A Vercel detectará automaticamente que é um projeto React, mas você pode verificar:
- **Framework Preset:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

### 4. Deploy
- Clique em "Deploy"
- Aguarde o processo de build e deploy
- Sua aplicação estará disponível na URL fornecida

## 🖥️ Método 2: Deploy via CLI

### 1. Instale a Vercel CLI
```bash
npm i -g vercel
```

### 2. Login na Vercel
```bash
vercel login
```

### 3. Deploy do Projeto
No diretório do projeto, execute:
```bash
# Para deploy de preview
npm run preview

# Para deploy de produção
npm run deploy
```

## ⚙️ Configurações Automáticas

O arquivo `vercel.json` já está configurado com:
- ✅ Redirects para SPA (Single Page Application)
- ✅ Cache otimizado para assets estáticos
- ✅ Configurações de headers
- ✅ Rotas para React Router

## 🔄 Deploy Automático

Após o primeiro deploy:
- Todo push para a branch `main/master` fará deploy automático para produção
- Pushes para outras branches criarão previews
- Pull requests também geram previews automaticamente

## 📝 Comandos Úteis

```bash
# Ver logs do deploy
vercel logs

# Listar deployments
vercel ls

# Remover deployment
vercel rm [deployment-url]

# Ver informações do projeto
vercel inspect
```

## 🌐 Domínio Personalizado

### 1. Adicionar Domínio
- No dashboard da Vercel, acesse seu projeto
- Vá em "Settings" > "Domains"
- Adicione seu domínio personalizado

### 2. Configurar DNS
- Configure os registros DNS do seu provedor:
  - Tipo: `CNAME`
  - Nome: `@` ou `www`
  - Valor: `cname.vercel-dns.com`

## 🚨 Solução de Problemas

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Certifique-se de que não há erros no código
- Verifique os logs de build na Vercel

### Erro 404 em Rotas
- O arquivo `vercel.json` deve estar configurado corretamente
- Verifique se o React Router está funcionando localmente

### Assets não Carregam
- Verifique se os caminhos dos assets estão corretos
- Use caminhos relativos (`./` ou `../`)
- Certifique-se de que as imagens estão na pasta `public` ou importadas corretamente

## 📧 Suporte

Se encontrar problemas:
1. Consulte a [documentação da Vercel](https://vercel.com/docs)
2. Verifique os logs de deploy no dashboard
3. Entre em contato: itallo.prog@gmail.com

---

✨ **Seu portfolio estará online em poucos minutos!** 