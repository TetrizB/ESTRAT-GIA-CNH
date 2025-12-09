import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 text-sm border-t border-zinc-800 pb-24 md:pb-12">
      <div className="container mx-auto px-4 text-center">
        
        <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                <img src="https://i.postimg.cc/G22Gz9k7/Design-sem-nome-(4).png" alt="Estratégia CNH" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
            </div>
        </div>

        <p className="mb-6 text-white font-bold uppercase tracking-widest text-xs">Estratégia CNH &copy; {new Date().getFullYear()}</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-traffic-yellow transition-colors underline decoration-zinc-700 underline-offset-4">Termos de Uso</a>
          <a href="#" className="hover:text-traffic-yellow transition-colors underline decoration-zinc-700 underline-offset-4">Política de Privacidade</a>
          <a href="#" className="hover:text-traffic-yellow transition-colors underline decoration-zinc-700 underline-offset-4">Contato</a>
        </div>
        
        <p className="max-w-2xl mx-auto text-[10px] md:text-xs opacity-40 leading-relaxed">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.
        </p>
      </div>
    </footer>
  );
};