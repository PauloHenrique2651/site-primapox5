"use client";

import { useId, useState } from "react";

const options = [
  {
    label: "Esquadria",
    problem: "Exposição ao uso e às variações do ambiente.",
    preparation: "Limpeza e tratamento compatível com o substrato.",
    solution: "Pintura a pó selecionada conforme uso interno ou externo.",
    benefit: "Cobertura uniforme e acabamento consistente.",
  },
  {
    label: "Gabinete",
    problem: "Geometrias com dobras, cantos, bordas e áreas de difícil acesso.",
    preparation: "Remoção de contaminantes antes da aplicação.",
    solution: "Deposição eletrostática e cura controlada.",
    benefit: "Proteção contínua e acabamento visual de alto padrão.",
  },
  {
    label: "Mobiliário",
    problem: "Contato frequente, impacto e exigência estética.",
    preparation: "Preparação integral da peça metálica.",
    solution: "Resina e acabamento definidos conforme a aplicação.",
    benefit: "Superfície durável, uniforme e fácil de manter.",
  },
  {
    label: "Estrutura",
    problem: "Dimensões, geometria e exposição variam de projeto para projeto.",
    preparation: "Análise prévia da peça e das condições de trabalho.",
    solution: "Sistema viável após avaliação técnica e dimensional.",
    benefit: "Decisão baseada na peça real, sem prescrição genérica.",
  },
];

export function ProtectionExplorer() {
  const id = useId();
  const [active, setActive] = useState(0);
  const selected = options[active];

  return (
    <div className="protection-explorer">
      <div className="protection-explorer__tabs" role="tablist" aria-label="Tipo de peça">
        {options.map((option, index) => (
          <button
            key={option.label}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel`}
            tabIndex={active === index ? 0 : -1}
            aria-selected={active === index}
            onKeyDown={(event) => {
              let next = index;
              if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (index + 1) % options.length;
              else if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (index - 1 + options.length) % options.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = options.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              document.getElementById(`${id}-tab-${next}`)?.focus();
            }}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {option.label}
          </button>
        ))}
      </div>
      <div className="protection-explorer__result" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} tabIndex={0}>
        <p className="protection-explorer__selected">{selected.label}</p>
        {[
          ["Condição", selected.problem],
          ["Preparação", selected.preparation],
          ["Processo", selected.solution],
          ["Resultado esperado", selected.benefit],
        ].map(([label, value], index) => (
          <div className="protection-explorer__row" key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <p>{value}</p>
          </div>
        ))}
        <p className="protection-explorer__note">A definição final depende da análise do substrato, geometria, dimensões e ambiente de uso.</p>
      </div>
    </div>
  );
}
