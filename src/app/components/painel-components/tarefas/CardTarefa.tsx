'use client'
import { CheckCircle2, Flame, UserCircle2 } from 'lucide-react'
import useSound from 'use-sound'

interface Tarefa {
  id: number
  nome: string
  pontos: number
  feita: boolean
  responsavel?: 'voce' | 'parceiro'
}

interface CardTarefaProps {
  tarefa: Tarefa
  onConcluir: () => void
  onDelegar?: () => void
}

export default function CardTarefa({ tarefa, onConcluir }: CardTarefaProps) {
  // Hook para tocar o som ao concluir tarefa
  const [playConcluir] = useSound('/sounds/conquista.mp3', { volume: 0.5 })

  function handleConcluir() {
    if (!tarefa.feita) {
      playConcluir()
    }
    onConcluir()
  }

  return (
    <div
      onClick={handleConcluir}
      className={`cursor-pointer group rounded-2xl p-5 sm:p-6 shadow-xl border transition relative overflow-hidden backdrop-blur-xl 
        ${tarefa.feita
          ? 'border-emerald-400 bg-emerald-800/30 ring-2 ring-emerald-500/40'
          : 'border-pink-400/30 bg-[#2b2c3a]/80 hover:shadow-pink-500/40'}
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          {tarefa.feita ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : (
            <Flame className="w-5 h-5 text-orange-400 animate-pulse" />
          )}
          {tarefa.nome}
        </h2>

        {tarefa.responsavel && (
          <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800/30 px-2 py-1 rounded-full">
            <UserCircle2 className="w-3.5 h-3.5" />
            {tarefa.responsavel === 'voce' ? 'Você' : 'Parceiro'}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-pink-300 font-semibold">
          {tarefa.pontos} XP
        </span>
        <span className="text-xs text-gray-400 italic">
          {tarefa.feita ? 'Missão concluída!' : 'Clique para concluir'}
        </span>
      </div>

      {tarefa.feita && (
        <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none animate-pulse rounded-2xl z-0" />
      )}
    </div>
  )
}