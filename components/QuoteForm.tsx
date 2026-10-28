"use client";

import { useState } from "react";
import { company } from "@/data/site";
import { mailtoLink, quoteMessage } from "@/data/contact";
import styles from "./QuoteForm.module.css";

export function QuoteForm() {
  const [handoff, setHandoff] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const form = new FormData(event.currentTarget);
    const link = mailtoLink(`Orçamento — ${String(form.get("company") ?? "").trim()}`, quoteMessage(form));
    window.location.href = link;
    setHandoff(link);
  }

  return (
    <form className={`quote-form ${styles.form}`} id="orcamento" onSubmit={handleSubmit} onChange={() => setHandoff(null)}>
      <div className="quote-form__grid">
        <label>
          <span>Nome *</span>
          <input name="name" autoComplete="name" required placeholder="Como podemos chamar você?" />
        </label>
        <label>
          <span>Empresa *</span>
          <input name="company" autoComplete="organization" required placeholder="Nome da empresa" />
        </label>
        <label>
          <span>E-mail corporativo *</span>
          <input name="email" type="email" autoComplete="email" spellCheck={false} required placeholder="nome@empresa.com.br" />
        </label>
        <label>
          <span>Telefone *</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="(21) 00000-0000" />
        </label>
        <label>
          <span>Tipo de peça</span>
          <select name="application" defaultValue="">
            <option value="" disabled>Selecione</option>
            <option>Esquadria ou elemento arquitetônico</option>
            <option>Gabinete ou painel</option>
            <option>Mobiliário ou expositor</option>
            <option>Componente industrial</option>
            <option>Outro</option>
          </select>
        </label>
        <label>
          <span>Cidade / Estado</span>
          <input name="location" autoComplete="address-level2" placeholder="Rio de Janeiro / RJ" />
        </label>
      </div>
      <label>
        <span>Conte sobre o projeto *</span>
        <textarea name="details" required rows={5} placeholder="Material, dimensões, quantidade, uso da peça e prazo desejado." />
      </label>
      <p className={styles.help}>Desenhos e fotos ajudam na avaliação. Anexe os arquivos diretamente no e-mail que será aberto.</p>
      {handoff && (
        <div className={styles.handoff} role="status">
          <h2>Confira o e-mail antes de enviar</h2>
          <p>Seu aplicativo de e-mail abriu uma mensagem para {company.email} com os dados do formulário. Adicione os anexos e confirme o envio. Se nada abriu, escreva diretamente para o endereço abaixo.</p>
          <a className="text-link" href={handoff}>{company.email} <span className="icon icon--north-east" aria-hidden="true" /></a>
        </div>
      )}
      <div className="quote-form__submit">
        <p>Os dados serão usados pela Primapox apenas para responder à sua solicitação.</p>
        <button className="button button--red" type="submit">Enviar por e-mail <span className="icon icon--north-east" aria-hidden="true" /></button>
      </div>
    </form>
  );
}
