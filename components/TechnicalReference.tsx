import { chemicalResistance, physicalProperties, testLegend, weatheringTests } from "@/data/services";
import styles from "./ServiceContent.module.css";

export function TechnicalReference() {
  return (
    <section className={styles.content} id="ficha-tecnica" aria-label="Referência técnica da tinta poliéster">
      <div className={`shell ${styles.archive}`}>
        <p className="eyebrow">Acervo técnico / Poliéster</p>
        <h2 className={styles.heading}>Dados para consulta.</h2>
        <p className={styles.intro}>Valores publicados no site anterior, com fonte indicada como Catálogo Coraldur — Tintas em Pó. São uma referência histórica: não substituem o boletim técnico da tinta escolhida nem constituem garantia para uma peça ou ambiente específico.</p>
        <details>
          <summary>Propriedades físicas e mecânicas</summary>
          <table><caption>Propriedades publicadas para a tinta em pó à base de poliéster</caption><thead><tr><th scope="col">Propriedade</th><th scope="col">Valor de referência</th></tr></thead><tbody>{physicalProperties.map(([name, value]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table>
          <p className={styles.note}>A fonte apresenta o ensaio de brilho como “Glass — 60 °C” e não informa todas as unidades de peso específico, dureza e flexibilidade. Esses pontos devem ser confirmados no boletim técnico; nenhuma unidade ausente foi presumida.</p>
        </details>
        <details>
          <summary>Resistência aos agentes químicos</summary>
          <table><caption>Tempo de exposição e resultado registrados no acervo</caption><thead><tr><th scope="col">Agente</th><th scope="col">Exposição</th><th scope="col">Resultado</th></tr></thead><tbody>{chemicalResistance.map(([name, time, result]) => <tr key={name}><th scope="row">{name}</th><td>{time}</td><td>{result}</td></tr>)}</tbody></table>
          <p className={styles.note}>“Tutuol” é a grafia usada na fonte. A sigla LB aparece nesse resultado, mas não é explicada na legenda original. Confirme a identificação do produto e do ensaio antes de usar esses dados para especificação.</p>
        </details>
        <details>
          <summary>Umidade, radiação e intemperismo</summary>
          <table><caption>Ensaios ambientais e complementares</caption><thead><tr><th scope="col">Ensaio</th><th scope="col">Resultado de referência</th></tr></thead><tbody>{weatheringTests.map(([name, value]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table>
        </details>
        <details>
          <summary>Legenda dos resultados</summary>
          <dl className={styles.legend}>{testLegend.map(([code, description]) => <div key={code}><dt>{code}</dt><dd>{description}</dd></div>)}</dl>
        </details>
        <p className={styles.note}>Fonte: <a className="text-link" href="https://www.primapox.com/servicos.php" target="_blank" rel="noopener noreferrer">acervo de serviços da Primapox</a>. Linhas duplicadas foram agrupadas, mantendo os valores publicados.</p>
      </div>
    </section>
  );
}
