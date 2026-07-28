export type AnimalId =
  | "elefante"
  | "girafa"
  | "suricata"
  | "zebra"
  | "rinoceronte"
  | "guepardo";

export type Project = {
  slug: string;
  title: string;
  kind: string;
  text: string[];
  role: string;
  state: string;
  stack: string[];
  /** O avistamento deste projeto no safari. */
  animal: AnimalId;
  /** Uma linha que liga o animal ao que o projeto faz. */
  sighting: string;
  /**
   * Captura de ecrã do projeto (caminho em /public, ex.: "/shots/rumia.png").
   * Enquanto não houver, o avistamento mostra um placeholder.
   */
  shot?: string;
};

/**
 * Seis projetos, seis avistamentos.
 * A ordem deste array define a ordem das paragens ao longo do carril.
 * O conteúdo dos projetos é verdadeiro; muda a moldura, não o que foi construído.
 */
export const PROJECTS: Project[] = [
  {
    slug: "rumia",
    title: "Rumia",
    kind: "Plataforma SaaS",
    animal: "elefante",
    sighting: "Como um elefante: mantém a manada inteira junta e não esquece nada.",
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
    animal: "girafa",
    sighting: "Como uma girafa: vê o jogo de cima, muito antes de os outros o verem.",
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
    animal: "suricata",
    sighting: "Como uma suricata: curioso, sempre de sentinela, a experimentar tudo primeiro.",
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
    animal: "zebra",
    sighting: "Como uma zebra: cada padrão é único, mas lê-se logo de que grupo é.",
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
    animal: "rinoceronte",
    sighting: "Como um rinoceronte: faz o trabalho pesado por ti, sem se queixar.",
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
    animal: "guepardo",
    sighting: "Como um guepardo: rápido, direto ao alvo, sem esforço a mais.",
    text: [
      "Sites rápidos, claros e bem posicionados para negócios que precisam de existir online sem complicações.",
      "Estrutura pensada para converter, não para impressionar: o que fazes, para quem, e como te contactam.",
    ],
    role: "Design e desenvolvimento",
    state: "Disponível",
    stack: ["Next.js", "TypeScript", "CMS leve", "Vercel"],
  },
];
