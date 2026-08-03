// TODO: preencher com o número real (formato internacional, só dígitos) e a mensagem padrão.
export const WHATSAPP_NUMBER = "5500000000000";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Quero saber mais sobre a Jettis Pay.";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
