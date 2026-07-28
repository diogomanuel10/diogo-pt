# Site pessoal — Diogo

Next.js 15 (App Router) + TypeScript. Sem dependências para lá do essencial:
build 100% estático. A navegação é um passeio de montanha-russa por um safari.

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
  page.tsx        cenário + carril + atalhos + estações
  globals.css     tokens + estilos (ficheiro único, com secções comentadas)
  icon.svg        favicon (pôr do sol no safari)
components/
  Scene.tsx       o safari: céu, sol, colinas, acácias   (fixo, imóvel)
  Ride.tsx        o carril e o carro                       ← o coração
  RideNav.tsx     os atalhos do topo + navegação por teclado
  Hero.tsx        entrada do passeio
  About.tsx       paragem 1
  Work.tsx        paragem 2 — os seis avistamentos
  Contact.tsx     fim da linha
  Animal.tsx      as silhuetas dos animais
  Reveal.tsx      wrapper de revelação no scroll
lib/
  projects.ts     os seis projetos (ordem = ordem das paragens; campo `animal`)
```

## Onde mexer

**Conteúdo dos projetos** → `lib/projects.ts`. É a única fonte de verdade. A
ordem do array define a ordem das paragens no carril. O campo `animal` escolhe
a silhueta (definidas em `components/Animal.tsx`).

**Paleta e tipografia** → bloco `:root` no topo de `globals.css`. Todas as
cores e fontes derivam de lá; mudar o `--savanna` muda o acento do site inteiro.

**O passeio** → `components/Ride.tsx`. O carro segue o carril com CSS
`offset-path`, e a distância percorrida liga-se ao progresso do scroll. O SVG
do carril é dimensionado 1:1 aos pixéis da viewport (sem escala de `viewBox`)
para que o desenho da linha e o `offset-path` do carro coincidam ao pixel — não
embrulhar num `viewBox` escalado.

## Decisões que valem uma nota

- **Fontes por `next/font/google`** (auto-hospedadas, sem `<link>` bloqueante e
  sem layout shift). Cada família expõe uma custom property
  (`--font-display`, `--font-body`, `--font-mono`) que os tokens de
  `globals.css` consomem.
- **CSS num ficheiro só.** É uma landing page; partir em CSS Modules agora era
  burocracia. Se crescer para várias rotas, partir por componente.
- **Movimento concentrado.** A ousadia está toda no carro sobre o carril; o
  resto é revelação simples no scroll.
- **`prefers-reduced-motion` respeitado** e foco de teclado visível. As
  estações navegam-se com `←` `→` e volta-se ao topo com `Esc`.

## Por fazer

- [ ] Texto do "Sobre" na tua voz
- [ ] Email verdadeiro em `components/Contact.tsx`
- [ ] Imagens/capturas por projeto no avistamento
- [x] Favicon e imagem de Open Graph (tema safari)
- [ ] Afinar as silhuetas dos animais
- [ ] Domínio
