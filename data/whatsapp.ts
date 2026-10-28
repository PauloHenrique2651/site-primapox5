import { company } from "./site";

// Official WhatsApp channel (added back at the client's request).
export function whatsappLink(message = "Olá! Gostaria de solicitar um orçamento de pintura eletrostática a pó.") {
  return `https://api.whatsapp.com/send/?phone=${company.whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
