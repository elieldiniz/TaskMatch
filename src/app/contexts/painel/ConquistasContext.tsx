'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConquistasContextProps {
  conquistas: string[];
  desbloquearConquista: (nome: string) => void;
  isConquistaDesbloqueada: (nome: string) => boolean;
}

const ConquistasContext = createContext<ConquistasContextProps | undefined>(undefined);

export function ConquistasProvider({ children }: { children: ReactNode }) {
  const [conquistas, setConquistas] = useState<string[]>([]);

  const desbloquearConquista = (nome: string) => {
    setConquistas((prev) => prev.includes(nome) ? prev : [...prev, nome]);
  };

  const isConquistaDesbloqueada = (nome: string) => conquistas.includes(nome);

  return (
    <ConquistasContext.Provider value={{ conquistas, desbloquearConquista, isConquistaDesbloqueada }}>
      {children}
    </ConquistasContext.Provider>
  );
}

export function useConquistas() {
  const context = useContext(ConquistasContext);
  if (!context) throw new Error("useConquistas deve ser usado dentro de ConquistasProvider");
  return context;
}