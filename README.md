# Site pessoal — Diogo

Next.js 15 (App Router) + TypeScript. Sem dependências para lá do essencial: build 100% estático, ~3 kB de página.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verifica tipos e gera a build estática
```

Deploy: importar o repo na Vercel. Não há variáveis de ambiente nem base de dados.

## Estrutura

```
app/
  layout.tsx      metadata, fontes
  page.tsx        composição das secções
  globals.css     tokens + estilos (ficheiro único, com secções comentadas)
components/
  Hero.tsx        linhas do campo a desenharem-se + nome
  About.tsx
  Work.tsx        o campo, a rotação e o detalhe de projeto   ← o coração
  Contact.tsx
  Reveal.tsx      wrapper de revelação no scroll
lib/
  projects.ts     os seis projetos
```

## Onde mexer

**Conteúdo dos projetos** → `lib/projects.ts`. É a única fonte de verdade. A ordem do array define a posição inicial no campo.

**Paleta e tipografia** → bloco `:root` no topo de `globals.css`. Todas as cores e fontes derivam de lá; mudar o `--leather` muda o site inteiro.

**A rotação** → `components/Work.tsx`. As constantes no topo (`COORD`, `CYCLE`) descrevem o campo:

- fila da frente, junto à rede: **4 · 3 · 2**
- fila de trás: **5 · 6 · 1**
- rotação: `4 → 3 → 2 → 1 → 6 → 5 → 4` (o percurso real do perímetro)

Os cartões são posicionados por `transform`, não por grid, precisamente para que a mudança de posição seja animável. Mudar `positions` re-renderiza com novos transforms e o CSS trata do movimento.

Abaixo dos 980px o campo passa a 2 colunas e abaixo de 640px a 1 — a rotação continua a funcionar, mas em ordem sequencial em vez de geométrica.

## Decisões que valem uma nota

- **Fontes por `<link>`**, não `next/font`. Mais simples de trocar enquanto a direção visual não está fechada. Quando estiver, passar para `next/font/google` melhora o LCP.
- **CSS num ficheiro só.** É uma landing page; partir em CSS Modules agora era burocracia. Se crescer para várias rotas, partir por componente.
- **Movimento concentrado.** A ousadia está toda na rotação; o resto é revelação simples no scroll. Animação espalhada por tudo cancela-se e faz o site parecer gerado.
- **`prefers-reduced-motion` respeitado** e foco de teclado visível. O detalhe navega-se com `←` `→` e fecha-se com `Esc`.

## Por fazer

- [ ] Texto do "Sobre" na tua voz
- [ ] Email verdadeiro em `components/Contact.tsx`
- [ ] Imagens/capturas por projeto no detalhe
- [ ] Favicon e imagem de Open Graph
- [ ] Domínio
