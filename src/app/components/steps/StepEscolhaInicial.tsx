'use client'
import { motion } from 'framer-motion'

interface StepEscolhaInicialProps {
  onCriarPerfil: () => void
  onAcessarPerfil: () => void
}

export default function StepEscolhaInicial({ onCriarPerfil, onAcessarPerfil }: StepEscolhaInicialProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-pink-400">Bem-vindo ao TaskMatch!</h1>
      <p className="text-center text-gray-300 mb-8">
        Comece criando seu perfil ou acesse um perfil já existente.
      </p>
      <div className="flex gap-4 w-full">
        <motion.button
          onClick={onAcessarPerfil}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl text-lg transition"
        >
          Já tenho perfil
        </motion.button>
        <motion.button
          onClick={onCriarPerfil}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl text-lg transition"
        >
          Criar perfil
        </motion.button>
      </div>
    </div>
  )
}