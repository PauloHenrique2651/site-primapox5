import Image from "next/image";
import styles from "./MaintenanceSection.module.css";

// Text reproduced exactly as published on the legacy site (www.primapox.com/manutencao.php),
// including its original spelling, at the client's request.
const factors = [
  "Localização geográfica do edifício;",
  "Meio ambiente (Marítimo, Industrial, etc...);",
  "Nível de poluição do ar;",
  "Ventos predominantes;",
  "Proteção da construção;",
  "Resistência a atritos do ar que causam erosão na camada pintada (Areia, etc...).",
];

const intervals = [
  ["Zona Marítima", "Mensal"],
  ["Zona Industrial", "Trimestral"],
  ["Zona não poluída de baixo risco ambiental", "A cada 18 meses"],
];

const requirements = [
  "Camada de tinta de 50 a 70 microns;",
  "Reparos imediatos em locais danificados;",
  "Cobertura e selagem de cortes e junções de esquadrias;",
  "Limpeza freqüente.",
];

export function MaintenanceSection() {
  return (
    <section className={styles.section}>
      <div className={`shell ${styles.layout}`}>
        <div className={styles.text}>
          <p>A pintura Poliéster deve ser limpa regularmente para manter suas propriedades decorativas. A freqüência de limpeza depende dos seguintes fatores:</p>
          <ul className={styles.list}>{factors.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Manchas na camada de pintura, resultante da poluição do ar, não devem ser removidas com material abrasivos ou produtos contendo acetonas, éter ou álcool.</p>
          <p>A limpeza de pintura Poliéster deve ser feita com uma solução de detergente neutro em água quente , usando uma flanela ou uma esponja macia. Nunca se deve usar material áspero no auxílio da limpeza.</p>
        </div>
        <figure className={styles.photo}>
          <Image src="/gallery/36.webp" alt="Cobertura metálica em acesso de edifício" fill sizes="(max-width: 900px) 92vw, 34vw" />
        </figure>
      </div>

      <div className={`shell ${styles.block}`}>
        <h3>Intervalo da limpeza</h3>
        <p>Para se manter as propriedades decorativas da pintura Poliéster é necessário seguir os intervalos de limpeza recomendados abaixo:</p>
        <dl className={styles.intervals}>
          {intervals.map(([zone, interval]) => <div key={zone}><dt>{zone}</dt><dd>{interval}</dd></div>)}
        </dl>
      </div>

      <div className={`shell ${styles.block}`}>
        <h3>Fatores ambientais que afetam a pintura Poliéster</h3>
        <dl className={styles.factors}>
          <div><dt>Luz Ultravioleta</dt><dd>A radiação da Luz Ultravioleta é maior em zonas marítimas que em zonas industriais ou rurais, devido a umidade do ar. Nas zonas costeiras, a degradação do filme de Poliéster é proporcionado ao descoloramento da cor.</dd></div>
          <div><dt>Atmosfera Salina</dt><dd>O sal do mar é muito corrosivo e afeta sobremaneira os substratos ferrosos e não ferrosos.</dd></div>
          <div><dt>Erosão</dt><dd>A combinação de ventos e detritos do litoral produz uma força de erosão que afeta a camada de Poliéster, causando danos a pintura.</dd></div>
        </dl>
        <p className={styles.lead}>Os requisitos necessários para garantia da pintura Poliéster são os seguintes:</p>
        <ul className={styles.list}>{requirements.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>

      <div className={`shell ${styles.closing}`}>
        <figure className={styles.photoSmall}>
          <Image src="/gallery/40.webp" alt="Divisória metálica com acabamento escuro em escritório" fill sizes="(max-width: 900px) 92vw, 30vw" />
        </figure>
        <div>
          <h3>Retoque</h3>
          <p>O retoque deverá ser feito com uma tinta líquida de boa solidez à luz como a alquídica (EX.: Cromadex 259). O local a ser retocado deve ser previamente lixado com lixa d´água grão 400.</p>
          <h3>Silicone industrial</h3>
          <p>A aderência do silicone estrutural sobre o material pintado é de responsabilidade do fabricante do silicone.</p>
        </div>
      </div>
    </section>
  );
}
