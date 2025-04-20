import { useState } from 'react'
import { Recompensa } from '@/app/types/recompensa/Recompensa'
import { recompensasMock } from '@/app/data/recompensasMock'

export function useRecompensas() {
  const [recompensas, setRecompensas] = useState<Recompensa[]>(recompensasMock)
  const [modalDetalhes, setModalDetalhes] = useState<{ open: boolean, recompensa: Recompensa | null }>({ open: false, recompensa: null })
  const [modalAberto, setModalAberto] = useState(false)

  function desbloquearRecompensa(id: number) {
    setRecompensas(recompensas =>
      recompensas.map(r =>
        r.id === id && !r.desbloqueada
          ? { ...r, desbloqueada: true, historico: [...r.historico, "Você"] }
          : r
      )
    )
  }

  function adicionarRecompensa(nome: string, custo: number, descricao: string) {
    setRecompensas(recompensas => [
      ...recompensas,
      { id: Date.now(), nome, custo, desbloqueada: false, descricao, historico: [] }
    ])
  }

  function abrirDetalhes(recompensa: Recompensa) {
    setModalDetalhes({ open: true, recompensa })
  }

  function fecharDetalhes() {
    setModalDetalhes({ open: false, recompensa: null })
  }

  return {
    recompensas,
    desbloquearRecompensa,
    adicionarRecompensa,
    modalDetalhes,
    abrirDetalhes,
    fecharDetalhes,
    modalAberto,
    setModalAberto
  }
}