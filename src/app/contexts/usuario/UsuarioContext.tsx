// src/app/contexts/usuario/UsuarioContext.tsx
"use client"

import React, { createContext, useContext, ReactNode } from "react";
import { useUsuarioData } from "@/app/hooks/useUsuarioData";

interface UsuarioContextProps {
  nome: string;
  avatar: string;
  setNome: (nome: string) => void;
  setAvatar: (avatar: string) => void;
  loading: boolean;
}

const UsuarioContext = createContext<UsuarioContextProps | undefined>(undefined);

export function UsuarioProvider({ children }: { children: ReactNode }) {
  const { usuario, setUsuario, loading } = useUsuarioData();

  const setNome = (nome: string) => {
    setUsuario((prev) => prev ? { ...prev, nome } : { nome, avatar: "💑" });
  };

  const setAvatar = (avatar: string) => {
    setUsuario((prev) => prev ? { ...prev, avatar } : { nome: "parceiro(a)", avatar });
  };

  return (
    <UsuarioContext.Provider value={{
      nome: usuario?.nome ?? "",
      avatar: usuario?.avatar ?? "",
      setNome,
      setAvatar,
      loading
    }}>
      {children}
    </UsuarioContext.Provider>
  );
}

// ESTE É O HOOK QUE VOCÊ DEVE IMPORTAR NOS COMPONENTES
export function useUsuario() {
  const context = useContext(UsuarioContext);
  if (!context) throw new Error("useUsuario deve ser usado dentro de UsuarioProvider");
  return context;
}