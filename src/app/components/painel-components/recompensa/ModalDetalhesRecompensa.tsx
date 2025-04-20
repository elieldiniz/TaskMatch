'use client'
import { motion } from 'framer-motion'
import { X, Gift, CheckCircle2 } from 'lucide-react'
import { Recompensa } from '@/app/types/recompensa/Recompensa'

interface ModalDetalhesRecompensaProps {
  recompensa: Recompensa | null;
  open: boolean;
  onClose: () => void;
}

export default function ModalDetalhesRecompensa({ recompensa, open, onClose }: ModalDetalhesRecompensaProps) {
  if (!open || !recompensa) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#23243a] rounded-2xl p-7 w-full max-w-md shadow-2xl border border-pink-500/30 relative"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-pink-400 hover:text-pink-300">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          {recompensa.desbloqueada
            ? <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce" />
            : <Gift className="w-8 h-8 text-pink-400 animate-pulse" />}
          <h2 className="text-2xl font-bold text-white">{recompensa.nome}</h2>
        </div>
        <p className="text-pink-200 mb-2">Custa <span className="font-bold">{recompensa.custo} XP</span></p>
        <p className="text-white/90 mb-4">{recompensa.descricao}</p>
        <div className="mb-2">
          <h3 className="text-pink-300 font-semibold mb-1">Histórico de desbloqueio:</h3>
          {recompensa.historico.length === 0 ? (
            <p className="text-pink-200 italic text-sm">Ninguém desbloqueou ainda.</p>
          ) : (
            <ul className="list-disc ml-5 text-pink-100 text-sm">
              {recompensa.historico.map((nome, i) => (
                <li key={i}>{nome}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  )
}