import React from 'react';
import { Play, ShieldCheck, AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-traffic-yellow overflow-hidden pb-12 pt-4 md:pt-8">
      {/* Decorative Stripes Top */}
      <div className="absolute top-0 left-0 w-full h-2 warning-stripes opacity-20"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
            <img src="https://i.postimg.cc/G22Gz9k7/Design-sem-nome-(4).png" alt="Estratégia CNH Logo" className="h-12 md:h-16 object-contain" />
        </div>

        {/* Urgency Tag */}
        <div className="bg-traffic-black/10 border border-traffic-black/20 rounded-lg p-3 mb-6 mx-auto max-w-2xl text-center flex items-center justify-center gap-2">
           <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
           <p className="text-sm font-bold text-traffic-black leading-tight text-left xs:text-center">
             A nova lei já entrou em vigor — quem não tiver estratégia vai travar nos novos exames.
           </p>
        </div>

        {/* Super Headline */}
        <h1 className="font-display text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black text-traffic-black uppercase leading-[1.1] mb-6 text-center">
          Como garantir sua aprovação na prova teórica e prática em semanas <br className="hidden md:block"/>
          <span className="bg-black text-white px-2 decoration-slice box-decoration-clone">mesmo sem autoescola.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-zinc-900 font-medium text-center mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Com a nova lei, você pode fazer tudo de casa — mas agora você não recebe mais o material da autoescola. 
          Por isso criamos uma <strong>estratégia completa</strong> pra você se preparar sem ficar perdido.
        </p>

        {/* VSL / Hero Image Placeholder - LCP OPTIMIZED */}
        <div className="relative w-full aspect-video max-w-3xl mx-auto bg-black rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-black mb-8 overflow-hidden group cursor-pointer" onClick={scrollToOffer}>
            {/* Thumbnail Image with Priority Loading */}
            <img 
              src="https://picsum.photos/seed/driving_success/800/450" 
              alt="Aluno aprovado com CNH" 
              width="800"
              height="450"
              // @ts-ignore - fetchPriority is standard now but React types might lag
              fetchPriority="high"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center pl-2 shadow-lg animate-pulse hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
                </div>
            </div>
            
            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 md:p-6 pt-12">
                <p className="text-white font-bold text-base md:text-lg uppercase text-center md:text-left">Veja como funciona a Estratégia CNH</p>
            </div>
        </div>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={scrollToOffer}
            className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-black text-xl md:text-2xl py-4 md:py-5 px-6 md:px-8 rounded-lg shadow-[0_6px_0_rgb(21,128,61)] active:shadow-[0_2px_0_rgb(21,128,61)] active:translate-y-1 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 uppercase border-2 border-green-400"
          >
            Quero Minha Estratégia Agora
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs md:text-sm font-bold text-traffic-black opacity-80 mt-2">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Compra Segura</span>
            <span className="hidden xs:inline">|</span>
            <span className="flex items-center gap-1">Acesso Imediato</span>
          </div>
        </div>
      </div>

      {/* Decorative Stripes Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-6 warning-stripes opacity-10 mt-8"></div>
    </section>
  );
};