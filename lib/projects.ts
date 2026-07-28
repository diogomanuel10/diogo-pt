export type Project = {
  slug: string;
  title: string;
  kind: string;
  text: string[];
  role: string;
  state: string;
  stack: string[];
};

/**
 * Seis projetos, seis posições de campo.
 * A ordem deste array define a posição inicial (ver POSITIONS em components/Work.tsx).
 */
export const PROJECTS: Project[] = [
  {
    slug: "rumia",
    title: "Rumia",
    kind: "Plataforma SaaS",
    text: [
      "Gestão completa de um clube desportivo: atletas, escalões, inscrições, quotas, presenças e comunicação com as famílias — tudo num sítio só.",
      "Começou como ferramenta interna para resolver folhas de Excel espalhadas por seis pessoas diferentes. Hoje está a ser generalizada para servir qualquer clube.",
    ],
    role: "Conceito, arquitetura e desenvolvimento",
    state: "Em uso · a caminho do mercado",
    stack: ["Next.js", "TypeScript", "Postgres", "Drizzle", "Vercel"],
  },
  {
    slug: "volleyiq",
    title: "VolleyIQ",
    kind: "Analytics desportivo",
    text: [
      "Recolha e análise de estatística de voleibol pensada para quem está no banco, não para quem está no laboratório.",
      "O objetivo é dar a um treinador de formação a leitura de jogo que hoje só está ao alcance de estruturas profissionais.",
    ],
    role: "Produto e desenvolvimento",
    state: "Em desenvolvimento",
    stack: ["Next.js", "TypeScript", "Supabase", "Charts"],
  },
  {
    slug: "jarvis",
    title: "Jarvis",
    kind: "Assistente pessoal",
    text: [
      "Assistente pessoal com interface de orbe de partículas e orquestração por áreas — cada domínio da minha vida tem o seu contexto e as suas ferramentas.",
      "É o meu campo de experiências: o sítio onde testo ideias de interface antes de as levar para projetos a sério.",
    ],
    role: "Tudo",
    state: "Contínuo",
    stack: ["React", "WebGL", "APIs de modelos", "Redis"],
  },
  {
    slug: "site-clube",
    title: "Site do clube",
    kind: "Site institucional",
    text: [
      "Site institucional de um clube desportivo, alimentado pela API da plataforma de gestão — notícias, escalões, calendários e resultados atualizam-se sozinhos.",
      "Ninguém tem de editar páginas à mão. O conteúdo vive onde já estava a ser tratado.",
    ],
    role: "Design e desenvolvimento",
    state: "Online",
    stack: ["Next.js", "API própria", "Vercel"],
  },
  {
    slug: "relatorios",
    title: "Relatórios automáticos",
    kind: "Ferramenta interna",
    text: [
      "Ferramenta de produtividade que recolhe atividade dispersa ao longo do dia e devolve um relatório escrito, pronto a ler.",
      "Poupa a cada pessoa a última meia hora do dia — que é precisamente aquela em que ninguém tem paciência para escrever relatórios.",
    ],
    role: "Desenvolvimento e operação",
    state: "Em uso diário",
    stack: ["Next.js", "Redis", "IA generativa", "Vercel"],
  },
  {
    slug: "sites-negocio",
    title: "Sites de negócio",
    kind: "Trabalho a cliente",
    text: [
      "Sites rápidos, claros e bem posicionados para negócios que precisam de existir online sem complicações.",
      "Estrutura pensada para converter, não para impressionar: o que fazes, para quem, e como te contactam.",
    ],
    role: "Design e desenvolvimento",
    state: "Disponível",
    stack: ["Next.js", "TypeScript", "CMS leve", "Vercel"],
  },
];
