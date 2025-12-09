import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

interface ClosingProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
}

export const ClosingSection: React.FC<ClosingProps> = ({ timeLeft }) => {
  const faqs = [
    {
      question: "Funciona para quem nunca estudou nada sozinho?",
      answer: "Sim! O método foi desenhado para iniciantes, com um passo a passo simples e direto ao ponto, sem enrolação ou linguagem difícil."
    },
    {
      question: "O acesso é imediato?",
      answer: "Sim! Assim que o pagamento é aprovado, você recebe automaticamente os dados de acesso no seu e-mail cadastrado."
    },
    {
      question: "Preciso ter experiência dirigindo?",
      answer: "Não. As aulas cobrem desde o zero absoluto (como ligar o veículo) até manobras avançadas e dicas de trânsito."
    },
    {
      question: "Posso estudar pelo celular?",
      answer: "Com certeza. A plataforma é 100% compatível com qualquer celular, tablet ou computador."
    },
    {
      question: "E se eu não gostar do conteúdo?",
      answer: "Você tem 7 dias de garantia incondicional. Se não gostar, basta enviar um e-mail que devolvemos todo o seu dinheiro."
    },
    {
      question: "O material serve para carro e moto?",
      answer: "Sim! A Estratégia CNH cobre as categorias A (moto) e B (carro), tanto na parte teórica quanto na prática."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      
      {/* Urgency Block */}
      <div className="container mx-auto px-4 max-w-4xl mb-20 relative z-10">
        <div className="bg-traffic-black rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Warning Stripes Top/Bottom */}
            <div className="absolute top-0 left-0 w-full h-3 bg-traffic-yellow warning-stripes"></div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-traffic-yellow warning-stripes"></div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-4 py-1 rounded mb-6 uppercase tracking-wider text-sm animate-pulse">
                    <AlertTriangle className="w-4 h-4" />
                    Última Chamada
                </div>

                <h2 className="text-2xl md:text-4xl font-display uppercase text-traffic-yellow mb-4 leading-tight">
                    A Nova Fase dos Exames Está Chegando — <br/>
                    <span className="text-white">Prepare-se Antes Que Fique Mais Difícil</span>
                </h2>
                
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    A maioria só vai correr atrás quando já for tarde. Você está tendo acesso antecipado ao método antes do reajuste.
                </p>

                {/* Countdown */}
                <div className="flex justify-center gap-3 md:gap-6 mb-8">
                    <TimeBox value={timeLeft.hours} label="Horas" />
                    <TimeBox value={timeLeft.minutes} label="Minutos" />
                    <TimeBox value={timeLeft.seconds} label="Segundos" />
                </div>
                
                <p className="text-red-500 font-bold text-sm uppercase tracking-widest bg-black/50 inline-block px-4 py-2 rounded border border-red-900/50">
                    Oferta disponível somente até hoje à meia-noite
                </p>
            </div>
        </div>
      </div>

      {/* Guarantee Block */}
      <div className="container mx-auto px-4 max-w-3xl mb-20">
        <div className="border-4 border-traffic-black bg-yellow-50 rounded-2xl p-6 md:p-10 relative shadow-[10px_10px_0px_0px_#000]">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-traffic-black text-traffic-yellow p-3 rounded-full border-4 border-white">
                <ShieldCheck className="w-10 h-10" />
            </div>
            
            <div className="text-center mt-6">
                <h3 className="text-2xl md:text-3xl font-display uppercase text-black mb-4">
                    Garantia Sem Risco de 7 Dias
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                    Teste a <strong>Estratégia CNH</strong> por 7 dias. 
                    Se você achar que o material não te ajudou em nada, ou se simplesmente não for com a minha cara, 
                    eu devolvo <span className="bg-traffic-yellow px-1 font-bold">100% do seu dinheiro</span>.
                </p>
                <p className="mt-4 font-bold text-black uppercase tracking-wide text-sm">
                    O risco é totalmente meu.
                </p>
            </div>
        </div>
      </div>

      {/* FAQ Block */}
      <div className="container mx-auto px-4 max-w-3xl">
        <h3 className="text-3xl font-display font-black text-center mb-10 text-traffic-black uppercase">
            Perguntas Frequentes
        </h3>
        
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>

    </section>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="bg-zinc-900 border border-zinc-700 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-3xl md:text-4xl font-mono font-bold text-traffic-yellow shadow-inner">
            {value.toString().padStart(2, '0')}
        </div>
        <span className="text-xs text-gray-500 uppercase mt-2 font-bold tracking-wider">{label}</span>
    </div>
);

const AccordionItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-2 border-gray-100 rounded-xl overflow-hidden bg-gray-50 hover:border-traffic-yellow transition-colors duration-300">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 text-lg focus:outline-none"
            >
                {question}
                {isOpen ? <ChevronUp className="shrink-0 text-traffic-black" /> : <ChevronDown className="shrink-0 text-gray-400" />}
            </button>
            
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 pt-0 text-gray-600 font-medium leading-relaxed border-t border-gray-100/50">
                    {answer}
                </div>
            </div>
        </div>
    );
}