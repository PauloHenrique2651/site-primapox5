"use client";

import { contact, home } from "@/data/primapox";
import styles from "./HomeContactForm.module.css";

// The "Fale Conosco" form of the legacy home page: same fields and placeholders, button "OK".
// Sending opens the visitor's e-mail app addressed to the legacy contact e-mail.
export function HomeContactForm() {
  const f = home.form;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const body = [field("name"), field("company"), `${field("ddd")} ${field("phone")}`, field("email"), "", field("notes")].join("\n");
    const params = new URLSearchParams({ subject: home.contactTitle, body }).toString().replace(/\+/g, "%20");
    window.location.href = `mailto:${contact.email}?${params}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.half} name="name" aria-label={f.name} placeholder={f.name} autoComplete="name" required />
      <input className={styles.half} name="company" aria-label={f.company} placeholder={f.company} autoComplete="organization" />
      <input className={styles.ddd} name="ddd" aria-label={f.ddd} placeholder={f.ddd} inputMode="numeric" autoComplete="tel-area-code" />
      <input className={styles.phone} name="phone" aria-label={f.phone} placeholder={f.phone} inputMode="tel" autoComplete="tel-local" />
      <input className={styles.half} name="email" type="email" aria-label={f.email} placeholder={f.email} autoComplete="email" required />
      <textarea className={styles.full} name="notes" aria-label={f.notes} placeholder={f.notes} rows={4} />
      <button className={styles.send} type="submit">{f.send}</button>
    </form>
  );
}
