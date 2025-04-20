'use client'
import React from "react";
import RecadosBox from "@/app/components/painel-components/recado-box/RecadosBox";
import { useRecados } from "@/app/contexts/painel/RecadosContext";

interface PainelRecadosBoxProps {
  handleNovoRecado: (msg: string) => void;
}

export default function PainelRecadosBox({ handleNovoRecado }: PainelRecadosBoxProps) {
  const { recados } = useRecados();
  return <RecadosBox recados={recados} onEnviar={handleNovoRecado} />;
}