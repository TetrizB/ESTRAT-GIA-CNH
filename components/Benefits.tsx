import React from 'react';
import { Car, GraduationCap, Video, CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Car className="w-10 h-10" />,
      title: "Independência Total",
      desc: "Aprenda no seu ritmo, sem depender da agenda lotada das autoescolas."
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Simulados Reais",
      desc: "Questões oficiais e dicas de quem já passou de primeira."
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Aulas Práticas",
      desc: "Vídeos passo-a-passo ensinando baliza e manobras de moto."
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Estratégia Validada",
      desc: "A Estratégia CNH já foi testada e aprovada por alunos em todo o território nacional."
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-gray-50 border-2 border-gray-100 p-6 rounded-xl hover:border-traffic-yellow hover:shadow-xl transition-all duration-300 group text-center">
              <div className="bg-traffic-black text-traffic-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-2 uppercase">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};