import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-6 border-4 border-dashed border-gray-200 p-8 rounded-3xl bg-gray-50">
          <div className="shrink-0">
            <ShieldCheck className="w-24 h-24 text-green-600" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase text-gray-900 mb-2">Risco Zero: Garantia de 7 Dias</h3>
            <p className="text-gray-600 leading-relaxed">
              Entre, assista às aulas e aplique a <strong>Estratégia CNH</strong>. Se em 7 dias você sentir que não está mais preparado para tirar sua CNH, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};