import React from 'react';
import { Star, MessageCircle, Lock } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rafael Souza",
      time: "há 2 dias",
      img: "https://picsum.photos/seed/rafael/100/100",
      text: "Eu estava travado na teórica, reprovei 2x. Peguei o macete das questões chaves e passei com 28 pontos! 🙏"
    },
    {
      name: "Mariana Costa",
      time: "há 5 horas",
      img: "https://picsum.photos/seed/mariana/100/100",
      text: "Só o guia de baliza já pagou o curso. Meu instrutor não explicava nada direito. Com o vídeo eu peguei em 10 minutos."
    },
    {
      name: "Pedro Henrique",
      time: "ontem",
      img: "https://picsum.photos/seed/pedro/100/100",
      text: "Melhor investimento. Fiz tudo de casa, não gastei com cursinho extra e já to com a CNH na mão. Valeu demais!"
    }
  ];

  const fascinations = [
    "O truque de 5 minutos que destrava 70% das questões da prova teórica.",
    "O padrão escondido que os examinadores repetem na prova prática.",
    "Por que 90% dos candidatos reprovam na mesma etapa — e como evitar isso.",
    "O erro silencioso que faz o aluno rodar mesmo dirigindo bem.",
    "A técnica mental que deixa você calmo na hora da prova sem decorar nada."
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-b-4 border-traffic-yellow overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-black uppercase text-traffic-black leading-tight mb-2">
                Quem Seguiu a Estratégia <span className="bg-traffic-yellow px-1">Já Passou</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
                Mesmo antes da nova lei, nossos alunos já usavam esse método para acelerar a aprovação.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left Col: Social Proof (WhatsApp Style) */}
            <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-2 mb-2 px-2">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-gray-400 text-sm uppercase tracking-wider">Últimas conversas</span>
                </div>
                
                {reviews.map((review, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start transform hover:-translate-y-1 transition-transform duration-300">
                        <img 
                            src={review.img} 
                            alt={review.name} 
                            loading="lazy"
                            width="48"
                            height="48"
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shrink-0" 
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                <span className="text-xs text-gray-400">{review.time}</span>
                            </div>
                            <div className="flex text-yellow-400 mb-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
                        </div>
                    </div>
                ))}
                <p className="text-center text-xs text-gray-400 mt-2">Imagens ilustrativas para proteger a identidade dos alunos.</p>
            </div>

            {/* Right Col: Fascination Bullets */}
            <div className="w-full lg:w-1/2 bg-traffic-black text-white p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-traffic-yellow rounded-full filter blur-[60px] opacity-20"></div>
                
                <h3 className="text-xl font-bold uppercase mb-6 text-traffic-yellow flex items-center gap-2 relative z-10">
                    <Lock className="w-5 h-5" />
                    O que você vai descobrir:
                </h3>

                <ul className="space-y-4 relative z-10">
                    {fascinations.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start group">
                            <span className="bg-zinc-800 text-traffic-yellow w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 group-hover:bg-traffic-yellow group-hover:text-black transition-colors">?</span>
                            <p className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">{item}</p>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-zinc-800">
                    <button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 font-bold py-3 rounded uppercase text-sm tracking-wider transition-colors"
                    >
                        Quero Aprender a Mesma Estratégia
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};