import React from 'react';
import { Check, Plus, AlertTriangle } from 'lucide-react';

export const StackSection: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stackItems = [
    {
      name: "Método Estratégia CNH Completo (Teoria + Prática)",
      price: "R$ 197,00",
      highlight: true
    },
    {
      name: "Ebook 'Macetes da Prova Teórica' (Padrões + Questões-Chave)",
      price: "R$ 47,00",
      isBonus: true
    },
    {
      name: "Guia Prático de Treino para Prova de Carro e Moto",
      price: "R$ 67,00",
      isBonus: true
    },
    {
      name: "Videoaulas Explicando os Novos Critérios do Detran",
      price: "R$ 97,00",
      isBonus: true
    },
    {
      name: "Simulados Exclusivos Atualizados para os Novos Exames",
      price: "R$ 37,00",
      isBonus: true
    },
    {
      name: "Checklist de Aprovação em 7 Dias",
      price: "R$ 27,00",
      isBonus: true
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-display font-black text-traffic-black uppercase leading-tight mb-4">
            Tudo o Que Você Precisa Para Passar nos Novos Exames
            <span className="block text-traffic-yellow bg-black transform -skew-x-3 px-2 mt-2 w-fit mx-auto">
              Mesmo Sem Autoescola
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Uma biblioteca completa com estratégias práticas, treinos, simulados e orientações que substituem o material que a autoescola sempre entregou.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Column: Visuals (Product Kit) */}
          <div className="w-full lg:w-5/12 relative group flex justify-center">
             {/* Product Image */}
             <div className="relative z-10 transform lg:group-hover:scale-105 transition-transform duration-500 w-full max-w-[400px]">
                <img 
                    src="https://i.postimg.cc/Pfv2kFw6/Design-sem-nome-(6).png" 
                    alt="Kit Estratégia CNH Oficial" 
                    width="500"
                    height="500"
                    loading="lazy"
                    className="w-full h-auto drop-shadow-2xl mx-auto filter"
                />
             </div>
          </div>

          {/* Right Column: The Stack List */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="bg-zinc-50 rounded-2xl border-2 border-black p-5 md:p-8 flex-grow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                
                <h3 className="text-lg md:text-xl font-bold uppercase mb-6 flex items-center gap-2 border-b-2 border-zinc-200 pb-4">
                    <span className="bg-green-600 text-white rounded-full p-1"><Check className="w-3 h-3 md:w-4 md:h-4" /></span>
                    Você vai receber:
                </h3>

                <ul className="space-y-4 mb-8">
                    {stackItems.map((item, idx) => (
                        <li key={idx} className={`flex items-start justify-between gap-2 md:gap-4 border-b border-dashed border-gray-300 pb-3 ${item.isBonus ? 'opacity-90' : ''}`}>
                            <div className="flex items-start gap-2 md:gap-3">
                                <div className={`mt-1 ${item.highlight ? 'text-black' : 'text-green-600'}`}>
                                    {item.isBonus ? <Plus className="w-4 h-4" /> : <Check className="w-5 h-5 stroke-[3]" />}
                                </div>
                                <div>
                                    {item.isBonus && <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">Bônus</span>}
                                    <p className={`text-sm md:text-base leading-tight md:leading-normal ${item.highlight ? 'font-black uppercase' : 'font-medium text-zinc-700'}`}>
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-gray-400 line-through whitespace-nowrap pt-1">
                                {item.price}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Total Value */}
                <div className="flex justify-between items-center mb-2 px-4">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">Valor Total:</span>
                    <span className="text-lg md:text-xl font-bold text-gray-400 line-through">R$ 471,00</span>
                </div>

                {/* Final Price Anchor */}
                <div className="bg-black p-4 md:p-6 rounded-xl text-center relative overflow-hidden mb-6 group cursor-pointer" onClick={scrollToOffer}>
                    <div className="absolute top-0 left-0 w-full h-full warning-stripes opacity-10"></div>
                    
                    <p className="text-white text-sm md:text-base font-medium mb-1 relative z-10">
                        Mas hoje, você garante tudo por apenas:
                    </p>
                    <div className="text-traffic-yellow text-5xl md:text-7xl font-display font-black relative z-10 leading-none">
                        R$ 27,00
                    </div>
                    <p className="text-gray-400 text-xs mt-2 relative z-10">Pagamento único. Sem mensalidades.</p>
                </div>

                {/* CTA */}
                <button 
                    onClick={scrollToOffer}
                    className="w-full bg-green-500 hover:bg-green-400 text-white text-lg md:text-xl font-black py-4 rounded-lg uppercase shadow-[0_4px_0_#166534] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 mb-3 min-h-[60px]"
                >
                    Quero Garantir Minha Estratégia Agora
                </button>

                {/* Micro Urgency */}
                <div className="flex items-start justify-center gap-2 text-center">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-zinc-500 leading-tight max-w-xs mx-auto">
                        A nova lei já está valendo. Quem não tiver preparo vai travar nos novos exames.
                    </p>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};