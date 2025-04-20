'use client'

import React, { useState } from "react";
import TopoPainel from "@/app/components/painel-components/painel/TopoPainel";
import ConquistasTopo from "@/app/components/painel-components/conquista/ConquistasTopo";
import SecaoRecompensas from "@/app/components/painel-components/recompensa/SecaoRecompensas";
import PainelLojaButton from "@/app/components/botoes/PainelLojaButton";
import PainelTarefas from "@/app/components/painel-components/painel/PainelTarefas";
import PainelBadges from "@/app/components/painel-components/painel/PainelBadges";
import PainelRecadosBox from "@/app/components/painel-components/painel/PainelRecadosBox";
import PainelToast from "@/app/components/painel-components/painel/PainelToast";
import PainelEfeitoVisual from "@/app/components/painel-components/painel/PainelEfeitoVisual";

// Contextos customizados
import { useXP } from "@/app/contexts/XpContext";
import { useTarefas } from "@/app/contexts/TarefasContext";
import { useConquistas } from "@/app/contexts/painel/ConquistasContext";
import { useRecados } from "@/app/contexts/painel/RecadosContext";

export default function PainelPage() {
  const { xp, xpMax, adicionarXp } = useXP();
  const { tarefas, adicionarTarefa, concluirTarefa } = useTarefas();
  const { conquistas: conquistasDesbloqueadas } = useConquistas();
  const { adicionarRecado } = useRecados();

  const [showEfeito, setShowEfeito] = useState<null | "subirNivel" | "recompensa">(null);
  const [showToast, setShowToast] = useState<{ type: "recado" | "novaTarefa" | null, message: string }>({ type: null, message: "" });
  const [showModal, setShowModal] = useState(false);

  // Adiciona tarefa
  const handleAdicionarTarefa = (tarefa: { nome: string; pontos: number; responsavel: 'voce' | 'parceiro' }) => {
    adicionarTarefa(tarefa);
    setShowModal(false);
    setShowToast({ type: "novaTarefa", message: "Nova tarefa adicionada!" });
    setTimeout(() => setShowToast({ type: null, message: "" }), 1200);
  };

  // Marca tarefa como concluída, soma XP, sobe nível e desbloqueia conquistas
  const handleConcluirTarefa = (id: number) => {
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa || tarefa.feita) return;

    const novoXp = xp + tarefa.pontos;

    // Sobe de nível se passar do xpMax
    if (novoXp >= xpMax) {
      setShowEfeito("subirNivel");
      setTimeout(() => setShowEfeito(null), 1800);
    } else {
      setShowToast({ type: "recado", message: "XP ganho! Continue assim 🚀" });
      setTimeout(() => setShowToast({ type: null, message: "" }), 1000);
    }

    concluirTarefa(id);
    adicionarXp(tarefa.pontos);
  };

  // Adiciona novo recado e mostra toast
  const handleNovoRecado = (msg: string) => {
    adicionarRecado(msg);
    setShowToast({ type: "recado", message: "Recado enviado!" });
    setTimeout(() => setShowToast({ type: null, message: "" }), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181926] via-[#23243a] to-[#2d1b2f]">
      <PainelToast showToast={showToast} />
      <PainelEfeitoVisual showEfeito={showEfeito} setShowEfeito={setShowEfeito} />
      <div className="max-w-3xl mx-auto p-4">
        <TopoPainel />
        <PainelLojaButton />
        {/* Passe a prop correta para ConquistasTopo */}
        <ConquistasTopo conquistasDesbloqueadas={conquistasDesbloqueadas} />
        <PainelTarefas
          showModal={showModal}
          setShowModal={setShowModal}
          handleAdicionarTarefa={handleAdicionarTarefa}
          handleConcluirTarefa={handleConcluirTarefa}
        />
        <SecaoRecompensas />
        <PainelBadges />
      </div>
      <PainelRecadosBox handleNovoRecado={handleNovoRecado} />
    </div>
  );
}