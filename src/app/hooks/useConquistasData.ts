
import { useEffect, useState } from 'react'
import { conquistasMock, Conquista } from '@/app/data/conquistasMock'

export function useConquistasData() {
  const [conquistas, setConquistas] = useState<Conquista[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // Simula um delay de API
    const timeout = setTimeout(() => {
      // Aqui você trocaria por um fetch real no futuro
      setConquistas(conquistasMock)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timeout)
  }, [])

  return { conquistas, loading }
}