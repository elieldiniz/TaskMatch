'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { RefObject, useEffect } from 'react'
import { User, Settings, LogOut } from 'lucide-react'

interface MenuPerfilProps {
  open: boolean
  setOpen: (v: boolean) => void
  avatarRef: RefObject<HTMLDivElement | null>
}

export default function MenuPerfil({ open, setOpen, avatarRef }: MenuPerfilProps) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick)
    }
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open, avatarRef, setOpen])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.16 }}
          className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-3 min-w-[170px] bg-white/90 backdrop-blur-md text-[#23243a] rounded-xl shadow-lg border border-neutral-200 py-2"
        >
          <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-pink-100/60 transition text-left text-sm font-medium">
            <User className="w-4 h-4 opacity-70" /> Meu perfil
          </button>
          <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-pink-100/60 transition text-left text-sm font-medium">
            <Settings className="w-4 h-4 opacity-70" /> Configurações
          </button>
          <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-pink-100/60 transition text-left text-sm font-medium">
            <LogOut className="w-4 h-4 opacity-70" /> Sair
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}