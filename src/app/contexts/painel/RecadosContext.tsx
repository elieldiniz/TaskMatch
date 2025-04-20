
'use client'
import React, { createContext, useContext, ReactNode } from "react";
import { useRecadosData } from "@/app/hooks/useRecadosData";

interface RecadosContextProps {
  recados: string[];
  adicionarRecado: (msg: string) => void;
  loading: boolean;
}

const RecadosContext = createContext<RecadosContextProps | undefined>(undefined);

export function RecadosProvider({ children }: { children: ReactNode }) {
  const { recados, setRecados, loading } = useRecadosData();

  const adicionarRecado = (msg: string) => setRecados((prev) => [...prev, msg]);

  return (
    <RecadosContext.Provider value={{ recados, adicionarRecado, loading }}>
      {children}
    </RecadosContext.Provider>
  );
}

export function useRecados() {
  const context = useContext(RecadosContext);
  if (!context) throw new Error("useRecados deve ser usado dentro de RecadosProvider");
  return context;
}