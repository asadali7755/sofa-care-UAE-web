import { IconWhatsApp } from './Icons';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971547199189?text=Hi%2C%20I%20would%20like%20to%20book%20a%20sofa%20cleaning%20service%20in%20Dubai."
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with us on WhatsApp"
    >
      <IconWhatsApp size={26} />
    </a>
  );
}
