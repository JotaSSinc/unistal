
import React from 'react';
import { CONTACT_INFO } from '../constants';

const FloatingActionButtons: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  const phoneUrl = `tel:${CONTACT_INFO.phone1.replace(/\D/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-transform transform hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.814 4.898-1.309zM9.356 8.014c-.09-.231-.302-.372-.668-.381-.356-.009-.722-.009-1.089.009-.271.026-.689.121-.967.415-.404.416-.583 1.122-.547 1.229.035.106.52 1.303 1.621 2.422 1.458 1.432 2.658 1.833 3.286 2.029.475.152.923.14.923.14.498-.018.847-.283 1.023-.719.176-.436.176-1.056.119-1.152-.057-.096-.217-.145-.447-.263-.23-.119-1.369-.675-1.581-.75-.212-.075-.367-.119-.523.119-.155.239-.583.75-.719.9-.136.15-.271.17-.447.05-.176-.119-.742-.271-1.412-.865-.522-.475-.865-1.062-.992-1.238-.126-.176-.018-.271.1-.386.108-.106.239-.271.356-.415.118-.145.155-.239.231-.386.075-.145.038-.271-.018-.386z"/>
        </svg>
      </a>
      <a
        href={phoneUrl}
        className="bg-unistal-yellow text-unistal-dark w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-unistal-yellow-darker transition-all duration-300 transform hover:scale-110"
        aria-label="Call Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.934 10.934 0 005.466 5.466l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingActionButtons;