

import { useEffect, useState } from "react";
import { tarefasMock, Tarefa } from "@/app/data/tarefasMock";

export function useTarefasData() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simula um delay de fetch
    const timeout = setTimeout(() => {
      setTarefas(tarefasMock);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return { tarefas, setTarefas, loading };
}