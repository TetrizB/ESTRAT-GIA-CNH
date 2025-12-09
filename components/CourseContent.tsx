import React from 'react';
import { BookOpen, PlayCircle, BrainCircuit, Cone } from 'lucide-react';

export const CourseContent: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-900 text-white overflow-hidden relative">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-traffic-yellow rounded-full filter blur-[100px] opacity-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-traffic-yellow font-bold uppercase tracking-widest text-sm">O que você vai receber</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Área de Membros Exclusiva</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Mockup Simulation */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-full max-w-md aspect-[4/3] bg-zinc-800 rounded-2xl border-4 border-zinc-700 shadow-2xl flex items-center justify-center overflow-hidden group">
              {/* Fake UI Header */}
              <div className="absolute top-0 left-0 w-full h-8 bg-zinc-950 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="text-center p-8 transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/traffic/600/400" 
                  alt="Plataforma do Curso" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                />
                <div className="relative z-10">
                    <h3 className="text-4xl font-black text-traffic-yellow mb-2">ESTRATÉGIA CNH</h3>
                    <p className="text-xl font-bold text-white uppercase bg-black/50 inline-block px-4 py-2 backdrop-blur-sm rounded">Módulo Intensivo</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-traffic-yellow text-black font-black p-4 rounded-full shadow-lg border-4 border-black rotate-12 z-20">
                100%<br/>ONLINE
              </div>
            </div>
          </div>

          {/* Module List */}
          <div className="w-full lg:w-1/2 space-y-6">
            <ModuleItem 
              icon={<BookOpen />}
              title="Ebook: A Bíblia da Teórica"
              desc="Todo o conteúdo da prova resumido. Esqueça as apostilas chatas de 200 páginas."
            />
            <ModuleItem 
              icon={<Cone />}
              title="Manobras Práticas Descomplicadas"
              desc="Aprenda a fazer baliza em 3 passos simples que funcionam em qualquer carro."
            />
            <ModuleItem 
              icon={<BrainCircuit />}
              title="Hack Psicológico"
              desc="Técnicas de controle mental para não tremer na hora do exame prático."
            />
            <ModuleItem 
              icon={<PlayCircle />}
              title="Simulados Oficiais Comentados"
              desc="Banco de questões atualizado com as pegadinhas mais comuns do Detran."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ModuleItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-traffic-yellow transition-colors">
    <div className="text-traffic-yellow shrink-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg md:text-xl text-white mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  </div>
);
