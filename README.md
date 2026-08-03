# Jettis Pay — Landing Page

Site institucional (landing page) da Jettis Pay. Construído com [Astro](https://astro.build) + Tailwind CSS v4, é um site 100% estático (HTML/CSS/JS puro) — não precisa de servidor de backend, banco de dados ou Node.js rodando em produção.

## Requisitos

- [Node.js](https://nodejs.org) versão **22.12.0 ou superior**
- npm (instalado junto com o Node)

Para conferir a versão instalada:

```sh
node -v
```

## Instalação

1. Extraia este zip em uma pasta no seu computador.
2. Abra um terminal dentro dela e instale as dependências:

```sh
npm install
```

## Rodando localmente (modo desenvolvimento)

```sh
npm run dev
```

Isso abre o site em `http://localhost:4321`, com atualização automática a cada alteração de código. Use esse modo apenas para testar/editar — não é o modo usado em produção.

## Gerando a versão de produção

```sh
npm run build
```

O site final (HTML, CSS, JS e imagens já otimizados) é gerado na pasta `./dist/`. É **essa pasta `dist/`** que deve ser publicada no serviço de hospedagem — não a pasta `src/`.

Para conferir localmente como fica a versão de produção antes de publicar:

```sh
npm run preview
```

## Hospedagem

Por ser um site estático, ele pode ser hospedado em praticamente qualquer serviço. Duas opções recomendadas:

### Opção 1 — Vercel ou Netlify (recomendado)

1. Suba este projeto para um repositório Git (GitHub, GitLab, etc.).
2. Crie uma conta em [vercel.com](https://vercel.com) ou [netlify.com](https://netlify.com) e importe o repositório.
3. Configurações de build (geralmente detectadas automaticamente, já que o projeto usa Astro):
   - **Build command:** `npm run build`
   - **Output/Publish directory:** `dist`
4. Publique. Cada novo `git push` gera um novo deploy automaticamente.
5. Depois, configure o domínio próprio (ex: `jettispay.com.br`) nas configurações de domínio do provedor escolhido.

### Opção 2 — Qualquer hospedagem de arquivos estáticos

Serve também para hospedagem compartilhada tradicional (cPanel, cliente FTP, etc.):

1. Rode `npm run build` localmente.
2. Copie **todo o conteúdo** da pasta `dist/` gerada para a raiz do diretório público do seu hospedeiro (ex: `public_html/`).
3. Nenhuma configuração de servidor adicional é necessária — são só arquivos estáticos.

## ⚠️ Checklist antes de publicar

O site foi entregue com alguns placeholders que **precisam ser preenchidos com as informações reais** antes de ir ao ar:

- [ ] **WhatsApp** — abra `src/lib/whatsapp.ts` e troque `WHATSAPP_NUMBER` (hoje `"5500000000000"`, um número fictício) pelo número real, no formato internacional só com dígitos (ex: `"5511999999999"`). Esse valor alimenta todos os botões de "Falar no WhatsApp" do site (Hero, Navbar, CTA final e rodapé).
- [ ] **Redes sociais** — em `src/components/Footer.astro`, os ícones de Instagram, Facebook e LinkedIn estão com `href="#"` (não apontam para lugar nenhum). Substitua pelos links reais dos perfis da Jettis Pay.
- [ ] **Links do rodapé** — ainda em `src/components/Footer.astro`, "Central de ajuda" e "Perguntas frequentes" também estão com `href="#"`. Aponte para as páginas reais quando existirem, ou remova os links.
- [ ] **Domínio do site** — em `astro.config.mjs`, adicione a propriedade `site` com a URL final (ex: `site: "https://jettispay.com.br"`). Isso é necessário para gerar URLs corretas de SEO/compartilhamento.
- [ ] **Dados legais** — as páginas `src/pages/termos-de-uso.astro` e `src/pages/politica-de-privacidade.astro` mencionam "canais de atendimento disponíveis no rodapé", mas o site ainda não tem um e-mail de contato nem dados da empresa (razão social, CNPJ, endereço) publicados em nenhum lugar. Vale revisar essas páginas e incluir essas informações antes de publicar.

Depois de preencher tudo, rode `npm run build` novamente para gerar a versão final com os dados corretos.
