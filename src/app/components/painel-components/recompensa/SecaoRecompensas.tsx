'use client'

import { Gift } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import RecompensaCard from './RecompensaCard'
import ModalDetalhesRecompensa from './ModalDetalhesRecompensa'
import ModalAdicionarRecompensa from './ModalAdicionarRecompensa'
import BotaoAdicionarRecompensa from '@/app/components/botoes/BotaoAdicionarRecompensa'
import { useRecompensas } from '@/app/hooks/useRecompensas'

export default function SecaoRecompensas() {
  const {
    recompensas,
    desbloquearRecompensa,
    adicionarRecompensa,
    modalDetalhes,
    abrirDetalhes,
    fecharDetalhes,
    modalAberto,
    setModalAberto
  } = useRecompensas()

  return (
    <section className="max-w-4xl mx-auto py-8 px-2">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Gift className="w-7 h-7 text-pink-400" />
          Recompensas do casal
        </h2>
        <BotaoAdicionarRecompensa onClick={() => setModalAberto(true)} />
      </div>
      <p className="text-pink-200 mb-4">Troque seu XP por momentos especiais!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        <AnimatePresence>
          {recompensas.map((r) => (
            <RecompensaCard
              key={r.id}
              recompensa={r}
              onDesbloquear={() => desbloquearRecompensa(r.id)}
              onDetalhes={() => abrirDetalhes(r)}
            />
          ))}
        </AnimatePresence>
      </div>

      <ModalAdicionarRecompensa
        open={modalAberto}
        onClose={() => setModalAberto(false)}
        onAdd={adicionarRecompensa}
      />

      <ModalDetalhesRecompensa
        recompensa={modalDetalhes.recompensa}
        open={modalDetalhes.open}
        onClose={fecharDetalhes}
      />
    </section>
  )
}