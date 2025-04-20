'use client'

import { BotaoDashboard } from '../../botoes/BotaoDashboard'
import { useRef, useState } from 'react'
import { saudacao } from "@/app/utils/saudacao"
import MenuPerfil from "@/app/components/perfil/MenuPerfil"
import BarraXPCompacta from "@/app/components/botoes/BarraXPCompacta"
import React from 'react'
import { useXP } from "@/app/contexts/XpContext"
import { useUsuario } from "@/app/contexts/usuario/UsuarioContext";
import { useConquistasRecentes } from "@/app/hooks/useConquistasRecentes"
import { ConquistasRecentes } from "../conquista/ConquistasRecentes"

export default function TopoPainel() {
  const { xp, nivel, xpMax, conquistas } = useXP()
  const { nome, avatar } = useUsuario()

  const conquistasRecentes = useConquistasRecentes(conquistas)
  const [menuOpen, setMenuOpen] = useState(false)
  const avatarRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-8 bg-white/20 backdrop-blur-2xl px-8 py-6 rounded-3xl border border-white/20 shadow-2xl transition-all">
      {/* Perfil e saudação */}
      <div className="flex items-center gap-6">
        <div
          ref={avatarRef}
          className="relative w-20 h-20 flex items-center justify-center text-4xl rounded-full bg-[#1f2028] border-4 border-pink-400 shadow-[0_0_30px_#f472b6] cursor-pointer hover:scale-105 transition-transform"
          tabIndex={0}
          aria-label="Abrir menu de perfil"
          onClick={() => setMenuOpen((v) => !v)}
          onKeyDown={e => { if (e.key === 'Enter') setMenuOpen((v) => !v) }}
        >
          <span className="drop-shadow">{avatar}</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></span>
          <span className="absolute inset-0 rounded-full border-2 border-pink-300 pointer-events-none animate-glow" />
          <MenuPerfil open={menuOpen} setOpen={setMenuOpen} avatarRef={avatarRef} />
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white/90 mb-1 drop-shadow">
            {saudacao()}, <span className="text-pink-400">{nome}</span>!
          </p>
          <p className="text-base sm:text-lg text-pink-200 font-medium italic">
            Prontos para mais um dia de conquistas juntos? 💪✨
          </p>
        </div>
      </div>

      {/* Conquistas recentes e Botão Dashboard */}
      <div className="flex flex-col sm:items-end items-center gap-4 text-sm text-white w-full sm:w-auto">
        <ConquistasRecentes conquistasRecentes={conquistasRecentes} />
        <BotaoDashboard />
        <div className="w-full flex justify-start mt-4 mb-6">
          <BarraXPCompacta xp={xp} xpMax={xpMax} nivel={nivel} />
        </div>
      </div>
    </div>
  )
}