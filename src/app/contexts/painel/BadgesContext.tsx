'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";
import { badgesMock, BadgeMock } from "@/app/data/badgesMock";

interface BadgesContextProps {
  badgesDesbloqueados: number[]; // IDs dos badges desbloqueados
  desbloquearBadge: (id: number) => void;
  isBadgeDesbloqueado: (id: number) => boolean;
  allBadges: BadgeMock[];
}

const BadgesContext = createContext<BadgesContextProps | undefined>(undefined);

export function BadgesProvider({ children }: { children: ReactNode }) {
  // Deixe o primeiro badge desbloqueado por padrão
  const [badgesDesbloqueados, setBadgesDesbloqueados] = useState<number[]>(
    badgesMock.length > 0 ? [badgesMock[0].id] : []
  );

  const desbloquearBadge = (id: number) => {
    setBadgesDesbloqueados((prev) => prev.includes(id) ? prev : [...prev, id]);
  };

  const isBadgeDesbloqueado = (id: number) => badgesDesbloqueados.includes(id);

  return (
    <BadgesContext.Provider value={{
      badgesDesbloqueados,
      desbloquearBadge,
      isBadgeDesbloqueado,
      allBadges: badgesMock
    }}>
      {children}
    </BadgesContext.Provider>
  );
}

export function useBadges() {
  const context = useContext(BadgesContext);
  if (!context) throw new Error("useBadges deve ser usado dentro de BadgesProvider");
  return context;
}