# Contexto do projeto

Site pessoal do Diogo. Programador há 12 anos, treinador de voleibol e amante
de aventura. Serve para potenciais clientes perceberem quem sou e o que já
construí.

## Regra inegociável

**Nunca nomear empresas, empregadores ou clientes.** Os projetos são descritos
pelo problema que resolvem, nunca por quem os encomendou. Isto aplica-se a
código, comentários, copy, metadata e commits. Se um projeto não puder ser
descrito sem nomear alguém, fica de fora.

## A ideia do design

A diferença deste site não é ser bonito — é a navegação ser um **passeio de
montanha-russa por um safari**.

A página é uma viagem por um carril. À medida que se rola, o **carro percorre a
linha** através da savana e para em **estações**: Início, Sobre, Trabalhos e
Contacto. Os seis projetos são **seis avistamentos**, cada um com o seu animal.

Os **atalhos no topo** (Início · Sobre · Trabalhos · Contacto) são a saída
expresso: saltam a página para qualquer estação — e, como isso rola a página, o
carro anda mesmo até lá. O carril e o carro são a assinatura do site e a razão
de ele existir.

## Regras de manutenção

**Não partir a mecânica do carril.** O carro segue o carril com CSS
`offset-path` (motion path). O SVG do carril é dimensionado **1:1 aos pixéis da
viewport** (sem escala de `viewBox`) precisamente para que o desenho da linha e
o `offset-path` do carro coincidam ao pixel. Não embrulhar o carril num
`viewBox` escalado — o carro deixaria de assentar na linha.

**Movimento concentrado.** A ousadia está toda no passeio (o carro no carril).
O cenário do safari é fixo e imóvel; as secções revelam-se de forma simples no
scroll. Não acrescentar parallax, partículas, cursores personalizados ou
animações de hover elaboradas sem eu pedir — animação espalhada por tudo
cancela-se e faz o site parecer gerado.

**Tokens no `:root` de `app/globals.css`.** Todas as cores e fontes derivam de
lá. Nunca escrever um hex diretamente num componente. Exceção inevitável: os
ficheiros de imagem (favicon `app/icon.svg`, apple-icon, imagem OG) têm de
trazer os valores literais — um SVG/PNG não lê custom properties. Aí, espelhar
os tokens e dizê-lo em comentário.

**Conteúdo em `lib/projects.ts`.** Fonte de verdade única. A ordem do array
define a ordem das paragens ao longo do carril. Cada projeto tem um `animal`
(o avistamento) — os silhuetas vivem em `components/Animal.tsx`.

## Chão de qualidade

Responsivo até mobile, `prefers-reduced-motion` respeitado (o carro segue o
scroll sem transição extra), foco de teclado visível, navegação entre estações
com `←` `→` e `Esc` para o topo. Manter isto em qualquer alteração.

## Stack

Next.js 15 App Router, TypeScript, sem dependências para lá do essencial.
Build estático, deploy na Vercel. Sem base de dados nem variáveis de ambiente.
Correr `npm run build` antes de dar qualquer trabalho por concluído — verifica
tipos.

## Estado atual

Funciona ponta a ponta. O que falta:

- [ ] Texto do "Sobre" na minha voz (o atual é provisório)
- [ ] Email verdadeiro em `components/Contact.tsx` (à espera do domínio)
- [ ] Capturas de ecrã por projeto no avistamento
- [x] Favicon e imagem de Open Graph (tema safari)
- [ ] Afinar as silhuetas dos animais (algumas ainda são só aproximadas)
- [ ] Domínio

## Como quero trabalhar

Português de Portugal. Direto. Propõe antes de executar alterações grandes.
Se discordares de uma decisão minha, di-lo — não a executes só porque pedi.
