'use client'
import React from "react";
import EfeitoVisual from "@/app/components/utils/EfeitoVisual";

interface PainelEfeitoVisualProps {
  showEfeito: null | "subirNivel" | "recompensa";
  setShowEfeito: (v: null) => void;
}

export default function PainelEfeitoVisual({ showEfeito, setShowEfeito }: PainelEfeitoVisualProps) {
  if (!showEfeito) return null;
  return (
    <EfeitoVisual
      tipo={showEfeito}
      exibir={true}
      onFim={() => setShowEfeito(null)}
    />
  );
}