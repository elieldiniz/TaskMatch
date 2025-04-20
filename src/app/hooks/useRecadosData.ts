
import { useEffect, useState } from "react";
import { recadosMock } from "@/app/data/recadosMock";

export function useRecadosData() {
  const [recados, setRecados] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setRecados(recadosMock);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  return { recados, setRecados, loading };
}