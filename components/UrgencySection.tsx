import React from 'react';
import { Timer } from 'lucide-react';

interface UrgencyProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
}

export const UrgencySection: React.FC<UrgencyProps> = ({ timeLeft }) => {
  return (
    <section id="offer" className="py-20 bg-traffic-black text-white relative overflow-hidden">
        {/* Warning Tapes Background */}
        <div className="absolute inset-0 opacity-10 warning-stripes"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-4 py-1 rounded mb-6 animate-pulse">
                <Timer className="w-5 h-5" />
                Oferta por tempo limitado
            </div>

            <h2 className="text-3xl md:text-5xl font-display uppercase mb-4 text-traffic-yellow">
                ⚠️ Atenção: As vagas vão acabar!
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Não deixe para depois. O preço promocional da nova turma será encerrado quando o cronômetro zerar.
            </p>

            <div className="flex justify-center gap-4 mb-10">
                <TimeBox value={timeLeft.hours} label="Horas" />
                <TimeBox value={timeLeft.minutes} label="Minutos" />
                <TimeBox value={timeLeft.seconds} label="Segundos" />
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-md mx-auto mb-8">
                <p className="text-gray-400 text-sm line-through mb-1">De R$ 297,00</p>
                <div className="text-5xl md:text-6xl font-black text-white mb-2 flex items-center justify-center gap-1">
                    <span className="text-2xl mt-2">R$</span>
                    97,00
                </div>
                <p className="text-green-400 font-bold mb-6">ou 12x de R$ 9,74</p>
                
                <button className="w-full bg-traffic-yellow hover:bg-yellow-400 text-black font-black text-xl py-4 rounded shadow-lg transform hover:scale-105 transition-all uppercase flex items-center justify-center gap-2">
                    Garantir Minha Vaga
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
            </div>
            
        </div>
    </section>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="bg-zinc-800 border-2 border-zinc-700 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-3xl md:text-4xl font-mono font-bold text-white shadow-inner">
            {value.toString().padStart(2, '0')}
        </div>
        <span className="text-xs text-gray-400 uppercase mt-2 font-semibold tracking-wider">{label}</span>
    </div>
);