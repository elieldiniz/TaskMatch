'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from '@/app/hooks/useLocalStorage'
import { VisualLayer } from '@/app/components/visual-effects/VisualLayer'
import { AnimatedLogo } from '@/app/components/visual-effects/AnimatedLogo'

export default function Home() {
  const router = useRouter()
  const [auth] = useLocalStorage('auth', false)

  const handleComecar = () => {
    if (auth) {
      router.push('/painel')
    } else {
      router.push('/CadastroPerfil')
    }
  }

  return (
    <VisualLayer>
      <main className="flex items-center justify-center min-h-screen text-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-8 py-12 bg-gradient-to-br from-[#2e2f4f]/70 to-[#1a1c2c]/70 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_#f472b6] w-full max-w-3xl border border-white/30 hover:shadow-[0_0_60px_#f472b6aa] transition-shadow duration-500"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <AnimatedLogo size={96} />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-[#f472b6] drop-shadow-2xl tracking-tight">
            💖 TaskMatch
          </h1>
          <p className="text-gray-200 mb-8 text-lg sm:text-xl font-medium max-w-xl mx-auto">
            Transforme as tarefas do dia a dia em uma jornada divertida com quem você ama — sem brigas, só amor! 💕
          </p>

          <motion.button
            onClick={handleComecar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold rounded-full shadow-lg transition-all"
          >
            Começar agora 💑
          </motion.button>
        </motion.div>
      </main>
    </VisualLayer>
  )
}