export const WHATSAPP_NUMBER = "5511932003256";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Quero saber mais sobre a Jettis Pay.";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
