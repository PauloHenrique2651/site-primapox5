// Every visible text below is copied exactly from the legacy site www.primapox.com
// (index, empresa, servicos, manutencao, galeria and contato tabs), at the client's request.
// Do not reword: spelling, punctuation and capitalisation follow the original.

export const tabs = [
  { label: "Home", href: "/" },
  { label: "A Primapox", href: "/empresa" },
  { label: "Serviços", href: "/servicos" },
  { label: "Manutenção", href: "/manutencao" },
  { label: "Galeria de Fotos", href: "/galeria" },
  { label: "Fale Conosco", href: "/contato" },
];

// --- Home (index.php) ---
export const home = {
  servicesTitle: "Nossos Serviços",
  servicesText: "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.",
  advantagesTitle: "Principais Vantagens:",
  advantages: ["Alto Padrão de Qualidade", "Maior durabilidade", "Cores Diversificadas e vivas"],
  aboutTitle: "A Primapox",
  aboutText: "Atuando há mais de 20 anos no ramo de pintura industrial, a Primapox é uma empresa que vem se destacando no mercado, pelo alto padrão de qualidade de sua pintura e pelo atendimento personalizado ao cliente; fatores predominantes de seu desempenho e credibilidade.",
  contactTitle: "Fale Conosco",
  locationTitle: "Localização",
  locationText: "Localizados na Praça Itapitanga nº 10, em Vigario Geral, contamos com a estrutura ideal pra atender você e seus clientes",
  more: "Saiba Mais",
  // Home form, as on index.php (placeholders inside the fields, button "OK").
  form: { name: "Nome", company: "empresa", ddd: "DDD", phone: "Telefone", email: "e-mail", notes: "observações...", send: "OK" },
};

// --- A Primapox (empresa.php) ---
export const about = {
  title: "Quem Somos",
  paragraphs: [
    "Atuando há mais de 20 anos no ramo de pintura industrial, a Primapox é uma empresa que vem se destacando no mercado, pelo alto padrão de qualidade de sua pintura e pelo atendimento personalizado ao cliente; fatores predominantes de seu desempenho e credibilidade.",
    "Seus projetos vão vibrar com nossas cores vivas  nas esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.",
    "Além disso, vão durar muito mais tempo, pois a proteção anti-corrosiva é superior ao da anodização e da pintura líquida, como também à resistência química e física.",
    "Estamos capacitados para executar pintura em peças com até 6,5m de comprimento.",
    "CONSULTE-NOS! Nós teremos o máximo prazer em mostrar-lhes todas as vantagens deste sistema de revestimento.",
  ],
};

// --- Serviços (servicos.php) ---
export const services = {
  title: "Serviços",
  benefitsTitle: "Benefícios da Tinta em Pó:",
  benefits: [
    "Isenta de solventes orgânicos e não produz odores, nem vapores.",
    "Reduz os riscos de combustão e elimina as perdas.",
    "Não agride ao meio ambiente.",
    "Fácil aplicação em uma única demão (evitando escorrimento e bolhas)",
    "Economia de energia com alta produtividade.",
    "Tempo de processo reduzido.",
    "Possibilidade de obter-se camadas de 50 À 70 microns.",
    "Alta resistência química e mecânica (corrosão, impactos, radiação U.V; etc.)",
    "Diversos tipos de acabamento e sistemas de resinas.",
    "Acabamento de alto nível.",
  ],
  typesTitle: "Tipos de Tinta em pó",
  types: [
    ["Híbrida:", "Compostas por resinas epóxi poliéster e indicadas para superfícies metálicas em peças de uso interior."],
    ["Poliéster:", "Composta por resinas poliésteres e indicada para superfícies metálicas em peças de uso exterior, especialmente peças de efeito arquitetônico."],
    ["Epóxi:", "Composta por resinas epóxidas e indicada para superfícies metálicas em peças de uso em ambientes quimicamente agressivos."],
    ["Poliuretano:", "Composta e com características semelhantes às dos poliésteres , porém com alastramento superior e possibilidade de atingir camadas inferiores a 40 micra na aplicação de cores escuras."],
  ],
  typesNote: "Obs.: A Primapox trabalha apenas com as resinas Híbrida e Poliéster.",
  tableTitle: "TINTA EM PÓ À BASE DE POLIÉSTER",
  physicalTitle: "Propriedades Físicas e Mecânicas",
  chemicalTitle: "Resistência aos Agentes Químicos",
  // Two independent columns, row for row as published (the first three rows appear twice in the original).
  physical: [
    ["Peso Específico", "1,4 – 1,8 (DC)"],
    ["Sólidos", "100%"],
    ["Ponto de Fusão", "105 - 110ºC"],
    ["Peso Específico", "1,4 – 1,8 (DC)"],
    ["Sólidos", "100%"],
    ["Ponto de Fusão", "105 - 110ºC"],
    ["Tempo de Secagem", "12/15´ a 200ºC"],
    ["Espessura do Filme", "50 - 60µ"],
    ["Brilho ( Glass – 60ºC )", "90 – 100%"],
    ["Dureza ( Koening )", "170”"],
    ["Flexibilidade ( Mandril cônico )", "6 - (SF)"],
    ["resiste Aderência ( Scrath-test )", "100%"],
    ["Embutimento ( Erichsen )", "8mm"],
    ["Impacto ( 50kg/cm·² )", "(SD)"],
    ["Rendimento médio ( m²/kg )", "10/12"],
    ["Resistencia aos raios", ""],
    ["(Q,U,V) 120h", "Ótimo(SC)"],
    ["(Q,U,V) 250h", "Ótimo(SC)"],
    ["(Q,U,V) 500h", "Ótimo(SC)"],
    ["Teste umidade 100%/40ºC", ""],
    ["500 h", "(I)"],
    ["1000h", "(I)"],
    ["Vários detergentes", "800h(I)"],
    ["Óleos comestíveis", "1000h(I)"],
    ["Óleos para motores", "1000h (I)"],
    ["Butanol", "100h (PB/LA)"],
    ["Hipoclorito de sódio 5%", "100h (LA/AM)"],
  ],
  chemical: [
    ["Soda cáustica 10%", "600h(LA)"],
    ["Soda cáustica 20%", "600h (LA)"],
    ["Ácido clorídrico 10%", "300h (I)"],
    ["Soda cáustica 10%", "600h(LA)"],
    ["Soda cáustica 20%", "600h (LA)"],
    ["Ácido clorídrico 10%", "300h (I)"],
    ["Ácido clorídrico 30%", "200h(LA)"],
    ["Ácido sulfúrico 10%", "300h(I)"],
    ["Ácido sulfúrico 40%", "300h(I)"],
    ["Ácido acético 10%", "300h(LA)"],
    ["Ácido acético concentrado", "não"],
    ["Ácido nítrico 10%", "300h (LA/AM)"],
    ["Tutuol ( imersão", "200h (LB/LA)"],
    ["Xilol ( imersão )", "200h (PB/LA)"],
    ["Solvesso 100 ( imersão )", "200h (LA)"],
    ["Metanol ( imersão )", "200h (PB/LA)"],
    ["Amoníaco 10%", "100h(I)"],
    ["Formol 10%", "1000h(LA)"],
    ["Água industrial", "1000h (I)"],
    ["Água destilada", "1000h  (I)"],
    ["Água do mar", "1000h(I)"],
    ["Teste SO2 ( Kesternich )", "10 rondas(I)"],
    ["Resistência aos intempéries", ""],
    ["(Weather-O-Meter ).", "(SC)"],
    ["Dureza ( com lápis Hardmuth )", "2 - 4h"],
    ["Intemperismo natural ( 12 meses )", "(PI)"],
  ],
  legendTitle: "LEGENDAS:",
  legend: [
    "(SA) Sem Ataque", "(DC) Dependendo das cores", "(SC) Sem Calcinação", "(PI) Praticamente inalterado",
    "(SD) Sem descamações", "(LA) Leve amolecimento do filme", "(I) Inalterado",
    "(SF) Sem fisuras", "(AM) Amolecimento do filme", "(PB) Perda de brilho",
  ],
  source: "FONTE: Catálogo Coraldur - Tintas em Pó",
  sloganTitle: "COM PRIMAPOX O METAL NÃO DÁ NA PINTA!",
  sloganParagraphs: [
    "O acabamento e a aparência da pintura com Primapox são superiores aos processos convencionais. A aplicação eletrostática forma uma película uniforme sobre a peça, recobrindo por igual, cantos, bordas e arestas, dando assim, uma completa proteção anticorrosiva.",
    "A pintura é feita com tinta apropriada para o uso ao qual a peça será submetida. As cores e os efeitos podem ser brilhante ou fosco. A resistência térmica, química, mecânica e a aderência são superiores as dos processos comuns. E as peças podem ser cortadas após serem pintadas. Tudo o que é usualmente fabricado em latão, cobre, alumínio e em chapa de ferro, pode ser executado através do processo Primapox. E o que é mais importante: por um preço que não vai corroer o seu bolso.",
  ],
  materialTitle: "Material",
  materialIntro: "As aplicações para a pintura em pó pelo processo Primapox são as seguintes:",
  materials: [
    ["Construção Civil", "esquadrias de ferro e de alumínio ( na Europa, 90% das esquadrias de alumínio são pintadas por esse processo ), varandas, corrimãos, maçanetas, porta corta-fogo, caixas para mangueiras e disjuntores, forros metálicos, tubulações aparentes ou concretadas, etc."],
    ["Na Decoração", "temos móveis metálicos, divisórias, luminárias e spots, aramados, armários de banheiro e cozinha."],
    ["Supermercados e lojas", "gôndolas, araras, cestinhas, carrinhos, placas de sinalização."],
    ["Equipamentos industriais", "gabinetes, painéis e estruturas."],
    ["Indústria naval", "gaiútas, esquadrias e painéis."],
  ],
  closing: "Se é metal, Primapox pinta e protege!",
  pretreatmentTitle: "Pré-tratamento",
  pretreatment: [
    "O Pré Tratamento da superfície antes da aplicação do Pó, quando o material é preparado para entrar no processo Primapox, é uma etapa crítica para a garantia de uma adesão apropriada da tinta no substrato metálico. Aplicadores profissionais realizam procedimentos específicos e controlados para assegurar que os perfis, como o de Alumínio, estejam adequadamente preparados para a obtenção de uma longa resistência aos ambientes agressivos.",
    "A Limpeza, Preparação e Tratamento Químico dos substratos metálicos são operações fundamentais para a performance de longo prazo dos revestimentos.",
    "O material, ou peça, é limpa por completo.",
    "São extintos os vestígios de graxa, gordura e corrosão. E a superfície é preparada por processos químicos para receber a tinta em pó dando o máximo de aderência.",
  ],
  paintingTitle: "Pintura",
  painting: "A peça é levada por um transportador aéreo contínuo à uma cabine onde recebe um recobrimento uniforme de aproximadamente 60 mícrons de tinta em pó epóxi, poliéster ou híbrida conforme o caso, aplicado por duas pistolas eletrostáticas. A tinta em pó tem grande vantagem sobre a tinta convencional de recobrir por inteiro a peça pintada, não deixando microcanais como a tinta líquida, por onde a corrosão tem penetração e início.",
  cureTitle: "Cura",
  cureIntro: "Chegamos à última etapa.",
  beforeTitle: "Antes",
  before: "O transportador aéreo atravessa com a peça numa estufa de 18 metros de comprimento, onde à uma temperatura de 200ºC, a tinta é polimerizada. A função básica da estufa é ativar a reação química do sistema de resinas.O perfeito balanceamento entre o período de aquecimento do substrato e o período em que a temperatura deste substrato permanece, determinará o perfeito alastramento e a performance especificada para os ensaios Físico-Químicos.",
  afterTitle: "Depois",
  after: [
    "O resultado? Um acabamento liso, plenamente uniforme e perfeito, com total resistência a impactos e a corrosão.",
    "Depois de passar pelo nosso controle de qualidade, sua peça estará pronta para você gravar a sua marca e fazer o seu nome aparecer no mercado.",
  ],
};

// --- Galeria de Fotos (galeria.php) ---
export const galleryTitle = "Galeria de Fotos";

// --- Fale Conosco (contato.php) ---
export const contact = {
  title: "Contato",
  intro: "Entre em contato pelo telefone (21) 3448-7320 ou preencha o formulário abaixo:",
  fields: { name: "Nome:", message: "Mensagem:", phone: "Telefone:", email: "E-mail:", subject: "Assunto:" },
  clear: "Limpar",
  send: "Enviar",
  company: "Primapox",
  addressLines: ["Praça Itapitanga 10, Vigário Geral", "Rio de Janeiro - RJ"],
  phoneLines: ["Tels.: (21) 3448-7320 / 3452-8763", "3452-8764 / 3452-8765"],
  email: "primapox@primapox.com",
  mapTitle: "Localização",
};

// --- Rodapé (rdp.gif), exactly as the legacy footer image reads ---
export const footerRights = "Primapox - Todos os Direitos Reservados";
export const footerLines = ["Praça 10, 42  - Vigário Geral - Rio de Janeiro", "(21) 3172-2000 - primapox@primapox.com"];
