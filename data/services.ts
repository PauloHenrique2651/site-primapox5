// Technical and catalogue facts reviewed against the client's legacy website.
// Historical test values are a reference, not a current product specification or warranty.
export const serviceBenefits = [
  "Formulação sem solventes orgânicos e sem os vapores associados a esses solventes.",
  "Redução dos riscos de combustão relacionados aos solventes e das perdas de material.",
  "Processo sem solventes orgânicos como característica ambiental do revestimento.",
  "Aplicação em uma demão, evitando escorrimentos e bolhas.",
  "Produtividade e economia de energia no processo descrito.",
  "Tempo de processo reduzido.",
  "Possibilidade de camadas entre 50 e 70 mícrons.",
  "Resistência química e mecânica, conforme a resina e a aplicação.",
  "Diferentes cores, efeitos, acabamentos e sistemas de resina.",
  "Qualidade visual e uniformidade da película.",
];

export const supportedMetals = ["Latão", "Cobre", "Alumínio", "Chapa de ferro"];

export const serviceApplications = [
  { title: "Construção civil", pieces: "Esquadrias de ferro e alumínio, batentes, caixilhos, varandas, corrimãos, maçanetas, portas corta-fogo, caixas de mangueiras e disjuntores, forros, fachadas, telhas, coberturas e tubulações." },
  { title: "Decoração e interiores", pieces: "Móveis metálicos, divisórias, luminárias, spots, aramados e armários de banheiro e cozinha." },
  { title: "Supermercados e lojas", pieces: "Gôndolas, araras, cestos, carrinhos e placas de sinalização." },
  { title: "Equipamentos industriais", pieces: "Gabinetes, painéis e estruturas metálicas." },
  { title: "Indústria naval", pieces: "Esquadrias, painéis e outras peças metálicas para embarcações." },
];

export const physicalProperties = [
  ["Peso específico", "1,4–1,8 (DC)"],
  ["Sólidos", "100%"],
  ["Ponto de fusão", "105–110 °C"],
  ["Tempo de secagem", "12/15 min a 200 °C"],
  ["Espessura do filme", "50–60 µm"],
  ["Brilho", "90–100%"],
  ["Dureza — Koening", "170″"],
  ["Flexibilidade — mandril cônico", "6 (SF)"],
  ["Aderência — scratch-test", "100%"],
  ["Embutimento — Erichsen", "8 mm"],
  ["Impacto — ensaio indicado como 50 kg/cm²", "SD"],
  ["Rendimento médio", "10/12 m²/kg"],
] as const;

export const chemicalResistance = [
  ["Soda cáustica 10%", "600 h", "LA"],
  ["Soda cáustica 20%", "600 h", "LA"],
  ["Ácido clorídrico 10%", "300 h", "I"],
  ["Ácido clorídrico 30%", "200 h", "LA"],
  ["Ácido sulfúrico 10%", "300 h", "I"],
  ["Ácido sulfúrico 40%", "300 h", "I"],
  ["Ácido acético 10%", "300 h", "LA"],
  ["Ácido acético concentrado", "Não informado", "Não resiste"],
  ["Ácido nítrico 10%", "300 h", "LA/AM"],
  ["Tutuol (grafia da fonte), imersão", "200 h", "LB/LA"],
  ["Xilol, imersão", "200 h", "PB/LA"],
  ["Solvesso 100, imersão", "200 h", "LA"],
  ["Metanol, imersão", "200 h", "PB/LA"],
  ["Amoníaco 10%", "100 h", "I"],
  ["Formol 10%", "1.000 h", "LA"],
  ["Água industrial", "1.000 h", "I"],
  ["Água destilada", "1.000 h", "I"],
  ["Água do mar", "1.000 h", "I"],
  ["Vários detergentes", "800 h", "I"],
  ["Óleos comestíveis", "1.000 h", "I"],
  ["Óleos para motores", "1.000 h", "I"],
  ["Butanol", "100 h", "PB/LA"],
  ["Hipoclorito de sódio 5%", "100 h", "LA/AM"],
] as const;

export const weatheringTests = [
  ["QUV — 120 h", "Ótimo (SC)"],
  ["QUV — 250 h", "Ótimo (SC)"],
  ["QUV — 500 h", "Ótimo (SC)"],
  ["Umidade 100% a 40 °C — 500 h", "I"],
  ["Umidade 100% a 40 °C — 1.000 h", "I"],
  ["SO₂ — Kesternich, 10 rondas", "I"],
  ["Weather-O-Meter", "SC"],
  ["Dureza com lápis Hardmuth", "2–4h (grafia da fonte)"],
  ["Intemperismo natural — 12 meses", "PI"],
] as const;

export const testLegend = [
  ["SA", "Sem ataque"], ["DC", "Dependendo das cores"], ["SC", "Sem calcinação"],
  ["PI", "Praticamente inalterado"], ["SD", "Sem descamações"], ["I", "Inalterado"],
  ["LA", "Leve amolecimento do filme"], ["SF", "Sem fissuras"],
  ["AM", "Amolecimento do filme"], ["PB", "Perda de brilho"],
] as const;

export const processDetails = [
  "A definição do acabamento considera o material da peça, suas dimensões, o ambiente de uso e o efeito desejado: brilhante ou fosco.",
  "A limpeza integral remove graxa, gordura e corrosão. A preparação e o tratamento químico do substrato criam a condição de aderência antes da pintura, inclusive em perfis de alumínio.",
  "A linha descrita no acervo utiliza transportador aéreo contínuo, cabine e duas pistolas eletrostáticas. O recobrimento indicado é de aproximadamente 60 µm, com resina híbrida ou poliéster selecionada conforme o uso.",
  "O acervo descreve uma estufa de 18 metros e temperatura de 200 °C. O aquecimento ativa a reação das resinas; o tempo e a temperatura do substrato são controlados antes da inspeção de qualidade. Os parâmetros do lote devem seguir a especificação da tinta utilizada.",
];
