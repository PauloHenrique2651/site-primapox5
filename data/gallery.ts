export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: "Processo" | "Acabamentos" | "Arquitetura" | "Componentes" | "Institucional";
};

const descriptions: Array<[GalleryItem["category"], string]> = [
  ["Institucional", "Letreiro da Primapox na unidade"],
  ["Componentes", "Perfis metálicos claros após acabamento"],
  ["Processo", "Perfis metálicos atravessando a linha de pintura"],
  ["Processo", "Peças suspensas na linha produtiva"],
  ["Acabamentos", "Perfis metálicos com acabamento verde"],
  ["Componentes", "Componentes metálicos suspensos"],
  ["Institucional", "Identificação externa da Primapox"],
  ["Acabamentos", "Perfis metálicos com acabamento vermelho"],
  ["Acabamentos", "Perfis metálicos com acabamento azul"],
  ["Acabamentos", "Perfis metálicos com acabamento amarelo"],
  ["Processo", "Vista interna da área de produção"],
  ["Institucional", "Letreiro da Primapox"],
  ["Acabamentos", "Amostras de acabamentos coloridos em perfis"],
  ["Acabamentos", "Amostras de cores e acabamentos Primapox"],
  ["Acabamentos", "Perfis com diferentes cores de acabamento"],
  ["Acabamentos", "Perfis metálicos em acabamento dourado"],
  ["Arquitetura", "Estrutura metálica de passarela"],
  ["Acabamentos", "Perfis metálicos verdes"],
  ["Acabamentos", "Composição de cores e acabamentos"],
  ["Acabamentos", "Amostras de acabamento em perfis metálicos"],
  ["Acabamentos", "Coleção de cores aplicadas em perfis"],
  ["Acabamentos", "Perfis vermelhos com superfície uniforme"],
  ["Componentes", "Conjunto de peças verdes suspensas"],
  ["Arquitetura", "Esquadrias brancas em fachada residencial"],
  ["Arquitetura", "Fachada envidraçada com estrutura metálica"],
  ["Arquitetura", "Esquadrias e guarda-corpo com acabamento claro"],
  ["Componentes", "Equipamentos industriais com acabamento claro"],
  ["Componentes", "Componentes industriais de grande dimensão"],
  ["Processo", "Peças claras organizadas na linha de pintura"],
  ["Arquitetura", "Divisórias e portas com perfis metálicos"],
  ["Processo", "Linha aérea com perfis metálicos suspensos"],
  ["Processo", "Vista da linha produtiva da Primapox"],
  ["Processo", "Peças em deslocamento pela área de produção"],
  ["Institucional", "Material histórico do acervo Primapox"],
  ["Arquitetura", "Esquadria branca em ambiente residencial"],
  ["Arquitetura", "Cobertura metálica em acesso de edifício"],
  ["Arquitetura", "Portas e esquadrias brancas junto à piscina"],
  ["Arquitetura", "Aplicação de esquadrias em residência"],
  ["Arquitetura", "Estrutura metálica curva em área externa"],
  ["Arquitetura", "Divisória metálica com acabamento escuro"],
  ["Componentes", "Chapas metálicas com acabamento vermelho"],
  ["Componentes", "Peça metálica vermelha finalizada"],
  ["Acabamentos", "Detalhe de acabamento amarelo"],
  ["Acabamentos", "Painéis em amarelo e grafite"],
  ["Componentes", "Componente industrial azul finalizado"],
  ["Componentes", "Componentes metálicos suspensos na linha"],
];

export const galleryItems: GalleryItem[] = descriptions.map(([category, alt], index) => ({
  id: index + 1,
  src: `/gallery/${index + 1}.webp`,
  alt,
  category,
}));

export const galleryPreviewIds = [3, 6, 17, 27, 40, 45];
