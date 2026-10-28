import { SectionHeading } from "./SectionHeading";
import { cleaningFactors, cleaningIntervals, coatingCare, environmentalFactors } from "@/data/maintenance";
import { mailtoLink } from "@/data/contact";
import styles from "./MaintenanceSection.module.css";

export function MaintenanceSection() {
  return (
    <section className={`section ${styles.section}`} id="manutencao" aria-label="Manutenção da pintura poliéster">
      <div className="shell">
        <SectionHeading
          eyebrow="Manutenção da pintura"
          title={<>Como manter<br />a pintura poliéster.</>}
          aside={<p>Orientações de limpeza, intervalos de manutenção e cuidados com o acabamento da sua peça.</p>}
        />

        <div className={styles.overview}>
          <div className={styles.cleaning}>
            <p className={styles.label}>Limpeza da pintura poliéster</p>
            <h3>Detergente neutro.<br />Contato suave.</h3>
            <p>Use uma solução de detergente neutro em água quente, com uma flanela ou esponja macia. Nunca utilize materiais ásperos no auxílio da limpeza.</p>
            <div className={styles.warning}>
              <strong>O que evitar</strong>
              <p>Manchas causadas pela poluição do ar não devem ser removidas com materiais abrasivos ou produtos que contenham acetona, éter ou álcool.</p>
            </div>
          </div>

          <div className={styles.schedule}>
            <p className={styles.label}>Intervalos recomendados</p>
            <h3>Cada ambiente pede uma rotina.</h3>
            <table>
              <caption className={styles.srOnly}>Frequência de limpeza recomendada para a pintura poliéster</caption>
              <thead><tr><th scope="col">Ambiente</th><th scope="col">Limpeza</th></tr></thead>
              <tbody>{cleaningIntervals.map(({ environment, interval }) => (
                <tr key={environment}><th scope="row">{environment}</th><td>{interval}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>

        <div className={styles.details}>
          <details>
            <summary>O que define a frequência de limpeza?<span aria-hidden="true" /></summary>
            <div className={styles.answer}><p>A rotina deve considerar os seguintes fatores:</p><ul>{cleaningFactors.map((factor) => <li key={factor}>{factor}</li>)}</ul></div>
          </details>
          <details>
            <summary>Fatores ambientais que afetam a pintura<span aria-hidden="true" /></summary>
            <div className={styles.answer}><dl>{environmentalFactors.map(({ title, description }) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl></div>
          </details>
          <details>
            <summary>Cuidados e requisitos para garantia<span aria-hidden="true" /></summary>
            <div className={styles.answer}>
              <ul>{coatingCare.map((care) => <li key={care}>{care}</li>)}</ul>
              <p className={styles.note}>Confirme com a Primapox as condições de garantia aplicáveis ao seu projeto.</p>
            </div>
          </details>
          <details>
            <summary>Retoque da pintura<span aria-hidden="true" /></summary>
            <div className={styles.answer}>
              <p>O retoque deve ser feito com tinta líquida de boa solidez à luz, como a alquídica. O material de referência cita Cromadex 259 como exemplo.</p>
              <p>O local a ser retocado deve ser previamente lixado com lixa d’água de grão 400. Confirme a especificação do retoque com a equipe técnica.</p>
            </div>
          </details>
          <details>
            <summary>Silicone industrial<span aria-hidden="true" /></summary>
            <div className={styles.answer}><p>A aderência do silicone estrutural sobre o material pintado é de responsabilidade do fabricante do silicone.</p></div>
          </details>
        </div>

        <div className={styles.support}>
          <p>Tem dúvidas sobre a manutenção da sua peça?</p>
          <a className="text-link" href={mailtoLink("Manutenção da pintura — Primapox")}>Falar com a Primapox <span className="icon icon--north-east" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
