"use client";

import { contact } from "@/data/primapox";
import styles from "./LegacyContent.module.css";

// Fields and buttons as on the legacy "Fale Conosco" form; sending opens the visitor's e-mail app.
export function LegacyContactForm({ id = "orcamento" }: { id?: string }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const form = new FormData(event.currentTarget);
    const field = (name: string) => String(form.get(name) ?? "").trim();
    const body = [`Nome: ${field("name")}`, `Telefone: ${field("phone")}`, `E-mail: ${field("email")}`, "", field("message")].join("\n");
    const params = new URLSearchParams({ subject: field("subject") || "Contato pelo site", body }).toString().replace(/\+/g, "%20");
    window.location.href = `mailto:${contact.email}?${params}`;
  }

  return (
    <form className={styles.form} id={id} onSubmit={handleSubmit}>
      <label>{contact.fields.name}<input name="name" autoComplete="name" required /></label>
      <div className={styles.formRow}>
        <label>{contact.fields.phone}<input name="phone" type="tel" autoComplete="tel" inputMode="tel" /></label>
        <label>{contact.fields.email}<input name="email" type="email" autoComplete="email" spellCheck={false} required /></label>
      </div>
      <label>{contact.fields.subject}<input name="subject" /></label>
      <label>{contact.fields.message}<textarea name="message" required /></label>
      <div className={styles.formActions}>
        <button type="reset">{contact.clear}</button>
        <button type="submit">{contact.send}</button>
      </div>
    </form>
  );
}
