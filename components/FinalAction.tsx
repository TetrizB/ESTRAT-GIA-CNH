import React from 'react';
import { Check, ArrowRight, X, Play, BookOpen, ShieldCheck, Video } from 'lucide-react';

export const FinalAction: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const summaryItems = [
    { icon: <Video size={18} />, text: "Método Completo" },
    { icon: <BookOpen size={18} />, text: "Material Atualizado" },
    { icon: <Play size={18} />, text: "Videoaulas e Ebooks" },
    { icon: <Check size={18} />, text: "Simulados Exclusivos" },
    { icon: <ArrowRight size={18} />, text: "Acesso Imediato" },
    { icon: <ShieldCheck size={18} />, text: "Garantia Sem Risco" },
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            
            {/* Title Block */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display uppercase font-black text-white mb-4 leading-none">
                    A Decisão Agora É Sua — <br />
                    <span className="text-traffic-yellow">Estar Preparado ou Ficar Para Trás</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Os novos exames vão exigir estratégia. Quem começa antes passa antes. Quem espera… trava.
                </p>
            </div>

            {/* Decision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                
                {/* Option 1 - Positive */}
                <div className="bg-zinc-800 border-2 border-green-500/50 rounded-xl p-6 md:p-8 flex flex-col h-full transform hover:scale-[1.02] transition-transform shadow-xl">
                    <div className="bg-green-500/20 w-fit px-3 py-1 rounded text-green-400 font-bold text-sm uppercase mb-4 tracking-wider border border-green-500/30">
                        Opção Inteligente
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Entrar agora</h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                        Estudar com clareza, garantir sua preparação com material completo e passar de primeira sem depender de ninguém.
                    </p>
                    <div className="mt-6 flex items-center text-green-400 font-bold gap-2">
                        <Check className="w-5 h-5" /> Resultado: Aprovação Rápida
                    </div>
                </div>

                {/* Option 2 - Negative */}
                <div className="bg-zinc-950 border-2 border-zinc-800 rounded-xl p-6 md:p-8 flex flex-col h-full opacity-70 hover:opacity-100 transition-opacity">
                    <div className="bg-red-500/10 w-fit px-3 py-1 rounded text-red-500 font-bold text-sm uppercase mb-4 tracking-wider border border-red-500/20">
                        Opção Arriscada
                    </div>
                    <h3 className="text-xl font-bold text-gray-300 mb-2">Esperar a lei mudar</h3>
                    <p className="text-gray-500 leading-relaxed flex-grow">
                        Enfrentar os novos exames sem nenhum material, perdido e correndo o risco de reprovar e gastar o dobro depois.
                    </p>
                    <div className="mt-6 flex items-center text-red-500 font-bold gap-2">
                        <X className="w-5 h-5" /> Resultado: Dificuldade e Atraso
                    </div>
                </div>

            </div>

            {/* Summary List */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-12 max-w-3xl mx-auto backdrop-blur-sm">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {summaryItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300 font-medium text-sm md:text-base">
                            <span className="text-traffic-yellow">{item.icon}</span>
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mega CTA */}
            <div className="max-w-2xl mx-auto text-center">
                <button 
                    onClick={scrollToOffer}
                    className="w-full bg-traffic-yellow hover:bg-yellow-400 text-black font-black text-2xl md:text-3xl py-6 md:py-8 px-6 rounded-lg shadow-[0_0_30px_rgba(255,208,0,0.3)] hover:shadow-[0_0_50px_rgba(255,208,0,0.5)] active:scale-95 transition-all uppercase leading-none mb-4"
                >
                    Quero Garantir Minha <br className="md:hidden" /> Estratégia Agora
                </button>
                <p className="text-red-400 font-bold text-sm uppercase tracking-wide mb-8 animate-pulse">
                    Última chance de entrar pelo menor valor antes da mudança oficial.
                </p>

                <p className="text-gray-500 text-sm max-w-lg mx-auto border-t border-zinc-800 pt-6">
                    "Se você quer agilizar sua aprovação, o caminho tá pronto. Só falta você começar."
                </p>
                
                <p className="text-zinc-600 text-xs mt-4">
                    Quando esta página sair do ar, não posso garantir que o preço será o mesmo.
                </p>
            </div>

        </div>
    </section>
  );
};
