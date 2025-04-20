'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalAdicionarRecompensaProps {
  open: boolean;
  onClose: () => void;
  onAdd: (nome: string, custo: number, descricao: string) => void;
}

export default function ModalAdicionarRecompensa({ open, onClose, onAdd }: ModalAdicionarRecompensaProps) {
  const [nome, setNome] = useState('')
  const [custo, setCusto] = useState(100)
  const [descricao, setDescricao] = useState('')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#23243a] rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-pink-500/30 relative"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-pink-400 hover:text-pink-300">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-white mb-4">Nova recompensa</h2>
        <input
          className="w-full mb-3 px-4 py-2 rounded-lg bg-white/10 text-white border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Nome da recompensa"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <input
          type="number"
          min={1}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-white/10 text-white border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Custo em XP"
          value={custo}
          onChange={e => setCusto(Number(e.target.value))}
        />
        <textarea
          className="w-full mb-4 px-4 py-2 rounded-lg bg-white/10 text-white border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Descrição da recompensa"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          rows={3}
        />
        <button
          onClick={() => {
            if (nome && custo > 0 && descricao) {
              onAdd(nome, custo, descricao)
              setNome('')
              setCusto(100)
              setDescricao('')
              onClose()
            }
          }}
          className="w-full py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-600 text-white font-bold shadow-lg hover:scale-105 transition-all"
        >
          Adicionar
        </button>
      </motion.div>
    </div>
  )
}