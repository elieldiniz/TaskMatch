

import Link from 'next/link'
import { LayoutDashboard } from 'lucide-react'

export function BotaoDashboard() {
  return (
    <Link
      href="/dashboard"
      className="
        mt-2 flex items-center gap-2 px-6 py-2 rounded-full text-base font-bold text-white
        bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-600
        shadow-lg hover:shadow-pink-500/40
        hover:scale-105 hover:-translate-y-1
        transition-all duration-200
        border-2 border-transparent hover:border-pink-400
        focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
      "
    >
      <LayoutDashboard className="w-5 h-5 drop-shadow" />
      Dashboard
    </Link>
  )
}