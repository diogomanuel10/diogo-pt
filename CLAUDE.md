# Contexto do projeto

Site pessoal do Diogo. Programador há 12 anos e treinador de voleibol.
Serve para potenciais clientes perceberem quem sou e o que já construí.

## Regra inegociável

**Nunca nomear empresas, empregadores ou clientes.** Os projetos são descritos
pelo problema que resolvem, nunca por quem os encomendou. Isto aplica-se a
código, comentários, copy, metadata e commits. Se um projeto não puder ser
descrito sem nomear alguém, fica de fora.

## A ideia do design

A diferença deste site não é ser bonito — é a navegação usar as regras do
voleibol.

Os seis projetos ocupam as seis posições de um campo:

- fila da frente, junto à rede: **4 · 3 · 2**
- fila de trás: **5 · 6 · 1**
- rotação: `4 → 3 → 2 → 1 → 6 → 5 → 4`

Carregar em "Rodar", ou saltar de projeto para projeto no detalhe, roda o campo
a sério — os cartões deslizam pelo perímetro na direção correta. É a assinatura
do site e a razão de ele existir.

Por isso os números não são decoração. São informação verdadeira. Não os
substituir por `01 / 02 / 03`.

## Regras de manutenção

**Não converter os cartões para CSS grid.** Estão posicionados por `transform`
absoluto de propósito: `grid-area` não é animável e a transição desaparecia.

**Movimento concentrado.** A ousadia está toda na rotação. Tudo à volta é
revelação simples no scroll. Não acrescentar parallax, partículas, cursores
personalizados ou animações de hover elaboradas sem eu pedir — animação
espalhada por tudo cancela-se e faz o site parecer gerado.

**Tokens no `:root` de `app/globals.css`.** Todas as cores e fontes derivam de
lá. Nunca escrever um hex diretamente num componente.

**Conteúdo em `lib/projects.ts`.** Fonte de verdade única. A ordem do array
define a posição inicial no campo.

## Chão de qualidade

Responsivo até mobile, `prefers-reduced-motion` respeitado, foco de teclado
visível, detalhe navegável com `←` `→` e fechável com `Esc`. Manter isto em
qualquer alteração.

## Stack

Next.js 15 App Router, TypeScript, sem dependências para lá do essencial.
Build estático, deploy na Vercel. Sem base de dados nem variáveis de ambiente.
Correr `npm run build` antes de dar qualquer trabalho por concluído — verifica
tipos.

## Estado atual

Funciona ponta a ponta. O que falta:

- [ ] Texto do "Sobre" na minha voz (o atual é provisório)
- [ ] Email verdadeiro em `components/Contact.tsx`
- [ ] Capturas de ecrã por projeto no detalhe
- [ ] Favicon e imagem de Open Graph
- [ ] Domínio

## Como quero trabalhar

Português de Portugal. Direto. Propõe antes de executar alterações grandes.
Se discordares de uma decisão minha, di-lo — não a executes só porque pedi.
