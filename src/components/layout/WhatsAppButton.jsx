import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/967783334002"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg transition-all duration-300 overflow-hidden"
      style={{ padding: hovered ? '10px 16px' : '10px' }}
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span
        className="text-sm font-medium whitespace-nowrap transition-all duration-300"
        style={{ maxWidth: hovered ? '100px' : '0', opacity: hovered ? 1 : 0 }}
      >
        WhatsApp
      </span>
    </a>
  );
}