
import React from "react";
import { ConquistaChave } from "@/app/hooks/useConquistasRecentes";
import { Medal, HeartHandshake, Star } from "lucide-react";

const iconesConquistas: Record<ConquistaChave, React.ReactElement> = {
  completou3: <Medal className="w-6 h-6 text-yellow-300" />,
  primeiroDelegou: <HeartHandshake className="w-6 h-6 text-white" />,
  estrela: <Star className="w-6 h-6 text-blue-300" />,
};

const textosConquistas: Record<ConquistaChave, string> = {
  completou3: "3 tarefas completas!",
  primeiroDelegou: "Delegou uma tarefa!",
  estrela: "Ganhou uma estrela!",
};

export function ConquistasRecentes({ conquistasRecentes }: { conquistasRecentes: ConquistaChave[] }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {conquistasRecentes.length > 0 ? conquistasRecentes.map((chave, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-700 shadow-lg font-semibold hover:scale-105 transition text-base animate-fadeInUp"
          title={textosConquistas[chave]}
        >
          {iconesConquistas[chave]}
          <span className="hidden sm:inline">{textosConquistas[chave]}</span>
        </div>
      )) : (
        <span className="text-pink-200 italic">Nenhuma conquista recente</span>
      )}
    </div>
  );
}