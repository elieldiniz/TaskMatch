'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ModalAdicionarTarefaProps {
  onAdicionar: (tarefa: { nome: string; pontos: number; responsavel: 'voce' | 'parceiro' }) => void
}

export default function ModalAdicionarTarefa({ onAdicionar }: ModalAdicionarTarefaProps) {
  const [aberto, setAberto] = useState(false)
  const [nome, setNome] = useState('')
  const [pontos, setPontos] = useState(20)
  const [responsavel, setResponsavel] = useState<'voce' | 'parceiro'>('voce')

  const handleCriar = () => {
    if (!nome.trim()) return
    onAdicionar({ nome, pontos, responsavel })
    setNome('')
    setPontos(20)
    setResponsavel('voce')
    setAberto(false)
  }

  return (
    <div className="mt-16 text-center">
      <button
        onClick={() => setAberto(true)}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all"
      >
        ➕ Adicionar tarefa
      </button>

      {aberto && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 flex items-center justify-center z-50 px-4"
        >
          <div className="bg-[#2a2c3a] w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-xl text-left">
            <h2 className="text-2xl font-bold text-pink-400 mb-6">Nova tarefa</h2>

            {/* Nome da tarefa */}
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Limpar a cozinha"
              className="w-full mb-4 px-4 py-3 rounded-xl bg-[#1f1f2b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Pontos */}
            <input
              type="number"
              value={pontos}
              min={5}
              max={100}
              onChange={(e) => setPontos(Number(e.target.value))}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-[#1f1f2b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Pontos"
            />

            {/* Responsável */}
            <select
              value={responsavel}
              onChange={(e) => setResponsavel(e.target.value as 'voce' | 'parceiro')}
              className="w-full mb-6 px-4 py-3 rounded-xl bg-[#1f1f2b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="voce">👤 Você</option>
              <option value="parceiro">❤️ Parceiro(a)</option>
            </select>

            {/* Ações */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setAberto(false)}
                className="w-full sm:w-auto text-gray-300 hover:text-white font-medium transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleCriar}
                className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-xl font-semibold transition"
              >
                Criar tarefa
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
