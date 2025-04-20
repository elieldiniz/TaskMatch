'use client'
import React from "react";
import Toast from "@/app/components/comuns/Toast";
import { Sparkles, ArrowUpCircle } from "lucide-react";

interface PainelToastProps {
  showToast: { type: "recado" | "novaTarefa" | null, message: string };
}

export default function PainelToast({ showToast }: PainelToastProps) {
  return (
    <Toast
      show={!!showToast.type}
      message={showToast.message}
      icon={showToast.type === "recado"
        ? <Sparkles className="w-5 h-5" />
        : <ArrowUpCircle className="w-5 h-5" />}
    />
  );
}