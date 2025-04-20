'use client'
import React, { createContext, useContext, ReactNode } from "react";
import { useTarefasData } from "@/app/hooks/useTarefasData";
import { Tarefa } from "@/app/data/tarefasMock";

type TarefasContextType = {
  tarefas: Tarefa[];
  adicionarTarefa: (t: Omit<Tarefa, "id" | "feita">) => void;
  concluirTarefa: (id: number) => void;
  loading: boolean;
};

const TarefasContext = createContext<TarefasContextType | undefined>(undefined);

export function TarefasProvider({ children }: { children: ReactNode }) {
  const { tarefas, setTarefas, loading } = useTarefasData();

  function adicionarTarefa(t: Omit<Tarefa, "id" | "feita">) {
    setTarefas(prev => [
      ...prev,
      { ...t, id: Date.now(), feita: false }
    ]);
  }

  function concluirTarefa(id: number) {
    setTarefas(prev => prev.map(t =>
      t.id === id ? { ...t, feita: true } : t
    ));
  }

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa, concluirTarefa, loading }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  const context = useContext(TarefasContext);
  if (!context) throw new Error("useTarefas deve ser usado dentro de TarefasProvider");
  return context;
}