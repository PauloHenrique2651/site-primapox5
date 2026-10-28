import { company } from "./site";

export function mailtoLink(subject = "Contato pelo site — Primapox", body = "") {
  const params = new URLSearchParams({ subject, body }).toString().replace(/\+/g, "%20");
  return `mailto:${company.email}?${params}`;
}

export function quoteMessage(form: FormData) {
  const field = (name: string) => String(form.get(name) ?? "").trim();
  return [
    "Solicitação de orçamento — Primapox",
    "",
    `Nome: ${field("name")}`,
    `Empresa: ${field("company")}`,
    `E-mail: ${field("email")}`,
    `Telefone: ${field("phone")}`,
    `Tipo de peça: ${field("application") || "Não informado"}`,
    `Cidade / Estado: ${field("location") || "Não informado"}`,
    "",
    "Sobre o projeto:",
    field("details"),
    "",
    "(Anexe desenhos e fotos a este e-mail, se houver.)",
  ].join("\n");
}
