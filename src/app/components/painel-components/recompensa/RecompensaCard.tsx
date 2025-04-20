'use client'
import { motion } from 'framer-motion'
import { Gift, CheckCircle2, Info } from 'lucide-react'
import useSound from 'use-sound'
import { useRef, useEffect } from 'react'
import Tooltip from '@/app/components/comuns/Tooltip'
import { Recompensa } from '@/app/types/recompensa/Recompensa'

interface RecompensaCardProps {
  recompensa: Recompensa;
  onDesbloquear: () => void;
  onDetalhes: () => void;
}

export default function RecompensaCard({ recompensa, onDesbloquear, onDetalhes }: RecompensaCardProps) {
  const [playDesbloqueio] = useSound('/cardcompleto.mp3', { volume: 0.5 })
  const prevDesbloqueada = useRef(recompensa.desbloqueada)

  useEffect(() => {
    if (!prevDesbloqueada.current && recompensa.desbloqueada) {
      playDesbloqueio()
    }
    prevDesbloqueada.current = recompensa.desbloqueada
  }, [recompensa.desbloqueada, playDesbloqueio])

  return (
    <motion.div
      whileHover={!recompensa.desbloqueada ? { scale: 1.05, rotate: -2, boxShadow: "0 0 24px #f472b6aa" } : {}}
      transition={{ type: "spring", stiffness: 200 }}
      className={`
        flex flex-col items-center justify-between
        rounded-2xl p-5 sm:p-6 shadow-xl border text-center
        backdrop-blur-xl cursor-pointer
        w-full max-w-xs mx-auto
        transition-transform duration-200
        ${recompensa.desbloqueada
          ? 'border-emerald-400 bg-gradient-to-br from-emerald-700/60 via-emerald-800/40 to-emerald-900/60'
          : 'border-pink-500/30 bg-gradient-to-br from-[#2b2c3a]/80 via-[#3a2940]/70 to-[#2b2c3a]/80'}
      `}
      style={{
        minHeight: 240,
      }}
      onClick={onDetalhes}
      tabIndex={0}
      aria-label={`Detalhes da recompensa ${recompensa.nome}`}
    >
      <div className="mb-3 flex flex-col items-center">
        <span className="inline-block mb-2">
          {recompensa.desbloqueada ? (
            <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
          ) : (
            <Gift className="w-12 h-12 text-pink-400 animate-pulse" />
          )}
        </span>
        <p className="text-lg sm:text-xl font-bold text-white mb-1 break-words">{recompensa.nome}</p>
      </div>

      <p className={`text-sm mb-4 ${recompensa.desbloqueada ? 'text-emerald-200' : 'text-pink-200'}`}>
        {recompensa.desbloqueada ? 'Recompensa conquistada!' : `Custa ${recompensa.custo} XP`}
      </p>

      <Tooltip text={recompensa.descricao}>
        <button
          disabled={recompensa.desbloqueada}
          onClick={e => { e.stopPropagation(); onDesbloquear(); }}
          className={`
            px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold text-white transition-all
            shadow-md flex items-center gap-2
            ${recompensa.desbloqueada
              ? 'bg-emerald-500/80 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-95'}
            focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
          `}
          style={{ minWidth: 140 }}
          tabIndex={-1}
        >
          <Info className="w-4 h-4" />
          {recompensa.desbloqueada ? 'Desbloqueada ✅' : 'Desbloquear'}
        </button>
      </Tooltip>
    </motion.div>
  )
}