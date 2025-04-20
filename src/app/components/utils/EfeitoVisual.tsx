'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface EfeitoVisualProps {
  tipo: 'concluirTarefa' | 'subirNivel' | 'recompensa' | 'recado' | 'novaTarefa'
  exibir: boolean
  onFim?: () => void
}

export default function EfeitoVisual({ tipo, exibir, onFim }: EfeitoVisualProps) {
  const [ativo, setAtivo] = useState(exibir)

  useEffect(() => {
    if (exibir) {
      setAtivo(true)
      setTimeout(() => {
        setAtivo(false)
        onFim?.()
      }, 1200)
    }
  }, [exibir, onFim])

  const renderConteudo = () => {
    switch (tipo) {
      case 'concluirTarefa':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 1 }}
            className="text-pink-400 text-6xl"
          >
            💖
          </motion.div>
        )
      case 'subirNivel':
        return (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -50, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-yellow-300 text-5xl"
          >
            🎉
          </motion.div>
        )
      case 'recompensa':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 0.8, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1.2 }}
            className="text-emerald-400 text-5xl"
          >
            ✨
          </motion.div>
        )
      case 'recado':
        return (
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-pink-300 text-4xl"
          >
            💌
          </motion.div>
        )
      case 'novaTarefa':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0.5, 1.2, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1 }}
            className="text-indigo-400 text-5xl"
          >
            ⚡
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {ativo && (
        <motion.div
          key="efeito"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
        >
          {renderConteudo()}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
