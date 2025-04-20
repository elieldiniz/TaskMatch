'use client'
import {
  Medal,
  Sparkles,
  Brain,
  HeartHandshake,
  Wrench,
  Heart,
  BadgeCheck
} from 'lucide-react'
import { useConquistasData } from '@/app/hooks/useConquistasData'

const iconComponents = {
  Medal,
  Sparkles,
  Brain,
  HeartHandshake,
  Wrench,
  Heart,
  BadgeCheck
}

interface ConquistasTopoProps {
  conquistasDesbloqueadas: string[] // ids das conquistas desbloqueadas
}

export default function ConquistasTopo({ conquistasDesbloqueadas }: ConquistasTopoProps) {
  const { conquistas, loading } = useConquistasData()

  if (loading) {
    return <div className="text-pink-300 text-center">Carregando conquistas...</div>
  }

  // Filtra só as conquistas desbloqueadas
  const desbloqueadas = conquistas.filter(c => conquistasDesbloqueadas.includes(c.id))

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-6">
      {desbloqueadas.map(({ id, texto, icon, color }) => {
        const Icon = iconComponents[icon as keyof typeof iconComponents]
        return (
          <div
            key={id}
            className="px-4 py-2 rounded-full bg-gradient-to-br from-[#2e2f4f] to-[#1f1f2b] text-white text-sm flex items-center gap-2 border border-white/10 shadow-[0_0_12px_#00000044] hover:shadow-[0_0_16px_#f472b680] transition-all duration-300 hover:scale-105 backdrop-blur-md"
          >
            <Icon className={`w-4 h-4 ${color}`} />
            <span className="whitespace-nowrap font-medium tracking-tight">
              {texto}
            </span>
          </div>
        )
      })}
    </div>
  )
}