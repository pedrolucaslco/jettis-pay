<div align="center">

# Jettis Pay — Landing Page

Site institucional desenvolvido sob demanda para a **Jettis Pay**, solução de pagamentos da Jettis.

<img src="./public/hero-image.png" alt="Preview da Jettis Pay" width="480" />

</div>

## Sobre o projeto

Landing page de conversão para um produto de pagamentos: apresenta a proposta de valor, os meios de pagamento suportados, diferenciais competitivos, o passo a passo de adesão e canais de contato — tudo desenhado e implementado do zero como serviço de desenvolvimento de site para o cliente.

Projeto **estático, rápido e sem dependência de backend** — só HTML/CSS/JS otimizados, prontos para qualquer hospedagem.

## Stack

- [Astro](https://astro.build) 7 — componentes `.astro`, sem ilhas de framework
- [Tailwind CSS](https://tailwindcss.com) v4 — tema via `@theme` em CSS, sem arquivo de config
- TypeScript

## Seções implementadas

- **Navbar** com CTA fixo
- **Hero** com destaque de proposta de valor e chamadas para ação
- **Bandeiras/meios de pagamento aceitos** (Visa, Mastercard, Elo, Amex, Pix, Boleto)
- **Grid de funcionalidades** (checkout, antifraude, relatórios, meios de pagamento)
- **Vantagens** do produto
- **Como funciona** — passo a passo de adesão
- **Barra de estatísticas** (aprovação, transações, negócios atendidos)
- **CTA final** de conversão
- **Footer** com navegação e redes sociais
- Integração de **clique-para-WhatsApp** em todos os CTAs
- Páginas legais: **Termos de Uso** e **Política de Privacidade**
- Sistema próprio de **ícones inline** (SVG, estilo Feather)
- Design 100% responsivo

## Rodando localmente

```sh
npm install
npm run dev
```

Site disponível em `http://localhost:4321`.

## Status

Entregue ao cliente para revisão. Pendências antes de ir ao ar em produção: número real de WhatsApp, links de redes sociais, domínio final e dados legais da empresa (ver histórico de commits/issues para detalhes).

---

Desenvolvido por [Pedro Lucas](https://github.com/pedrolucaslco) como serviço de desenvolvimento de site sob encomenda.
