// Grouped institutional navigation (structure inspired by full corporate menus).
export const menu = [
  {
    label: "Institucional",
    items: [
      { label: "A empresa", href: "/empresa" },
      { label: "Central técnica", href: "/central-tecnica" },
      { label: "Manutenção da pintura", href: "/manutencao" },
    ],
  },
  {
    label: "Serviços",
    items: [
      { label: "Pintura eletrostática a pó", href: "/solucoes/pintura-eletrostatica-a-po" },
      { label: "Resinas híbrida e poliéster", href: "/solucoes/pintura-eletrostatica-a-po#resinas" },
      { label: "Referência técnica", href: "/solucoes/pintura-eletrostatica-a-po#ficha-tecnica" },
    ],
  },
  { label: "Processo", href: "/processo" },
  { label: "Aplicações", href: "/aplicacoes" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
] as const;
