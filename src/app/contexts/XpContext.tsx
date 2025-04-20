'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

type XpContextType = {
  xp: number;
  nivel: number;
  xpMax: number;
  conquistas: string[];
  adicionarXp: (valor: number) => void;
  subirNivel: () => void;
  adicionarConquista: (nome: string) => void;
};

const XpContext = createContext<XpContextType | undefined>(undefined);

export function XpProvider({ children }: { children: ReactNode }) {
  const [xp, setXp] = useState(0);
  const [nivel, setNivel] = useState(1);
  const [conquistas, setConquistas] = useState<string[]>(["Primeira tarefa"]);
  const xpMax = 100 + (nivel - 1) * 50;

  function adicionarXp(valor: number) {
    let novoXp = xp + valor;
    let novoNivel = nivel;
    while (novoXp >= 100 + (novoNivel - 1) * 50) {
      novoXp -= 100 + (novoNivel - 1) * 50;
      novoNivel += 1;
    }
    setXp(novoXp);
    setNivel(novoNivel);
  }

  function subirNivel() {
    setNivel(n => n + 1);
    setXp(0);
  }

  function adicionarConquista(nome: string) {
    setConquistas(prev => prev.includes(nome) ? prev : [...prev, nome]);
  }

  return (
    <XpContext.Provider value={{ xp, nivel, xpMax, conquistas, adicionarXp, subirNivel, adicionarConquista }}>
      {children}
    </XpContext.Provider>
  );
}

export function useXP() {
  const ctx = useContext(XpContext);
  if (!ctx) throw new Error("useXP precisa estar dentro de XpProvider");
  return ctx;
}