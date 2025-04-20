
"use client"

import { useEffect, useState } from "react";
import { usuarioMock, UsuarioMock } from "@/app/data/usuarioMock";

export function useUsuarioData() {
  const [usuario, setUsuario] = useState<UsuarioMock | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setUsuario(usuarioMock);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  return { usuario, setUsuario, loading };
}