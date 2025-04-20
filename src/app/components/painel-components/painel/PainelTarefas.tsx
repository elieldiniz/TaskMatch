'use client'
import React from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedButton from "@/app/components/botoes/AnimatedButton";
import AnimatedCard from "@/app/components/botoes/AnimatedCard";
import CardTarefa from "@/app/components/painel-components/tarefas/CardTarefa";
import ModalAdicionarTarefa from "@/app/components/painel-components/tarefas/ModalAdicionarTarefa";
import { PlusCircle } from "lucide-react";
import { useTarefas } from "@/app/contexts/TarefasContext";

interface PainelTarefasProps {
  showModal: boolean;
  setShowModal: (v: boolean) => void;
  handleAdicionarTarefa: (tarefa: { nome: string; pontos: number; responsavel: 'voce' | 'parceiro' }) => void;
  handleConcluirTarefa: (id: number) => void;
}

export default function PainelTarefas({
  showModal,
  setShowModal,
  handleAdicionarTarefa,
  handleConcluirTarefa
}: PainelTarefasProps) {
  const { tarefas } = useTarefas();

  return (
    <>
      <div className="flex justify-between items-center my-6">
        <h2 className="text-xl font-bold text-pink-300">Tarefas</h2>
        <AnimatedButton
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow transition-all font-semibold"
          onClick={() => setShowModal(true)}
        >
          <PlusCircle size={18} /> Nova tarefa
        </AnimatedButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence>
          {tarefas.map((tarefa) => (
            <AnimatedCard key={tarefa.id}>
              <CardTarefa
                tarefa={tarefa}
                onConcluir={() => handleConcluirTarefa(tarefa.id)}
              />
            </AnimatedCard>
          ))}
        </AnimatePresence>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <AnimatedCard
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full"
          >
            <ModalAdicionarTarefa
              onAdicionar={handleAdicionarTarefa}
            />
            <button
              className="mt-4 text-pink-500 hover:underline w-full"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </AnimatedCard>
        </div>
      )}
    </>
  );
}