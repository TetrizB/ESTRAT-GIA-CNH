import React, { useState, useEffect } from 'react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-3 bg-white/95 backdrop-blur border-t-4 border-traffic-yellow z-50 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.15)] pb-6">
      <button 
        onClick={scrollToOffer}
        className="w-full bg-green-600 hover:bg-green-500 text-white font-black text-lg py-4 rounded-lg shadow-md uppercase tracking-wide flex items-center justify-center gap-2 animate-pulse-fast active:scale-95 transition-transform"
      >
        Quero Minha Estratégia Agora
      </button>
    </div>
  );
};