'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Heart, CheckCircle2, Users, Star } from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const [hearts, setHearts] = useState<any[]>([])
  const [explosions, setExplosions] = useState<any[]>([])
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const heights = ['-20vh', '-40vh', '-60vh', '-80vh', '-100vh']
      const id = Date.now()
      const top = heights[Math.floor(Math.random() * heights.length)]
      const newHeart = {
        id,
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 2,
        targetY: top,
      }

      setHearts((prev) => [...prev.slice(-30), newHeart])

      setTimeout(() => {
        setExplosions((prev) => [
          ...prev,
          {
            id,
            left: newHeart.left,
            top: newHeart.targetY,
          },
        ])
        setTimeout(() => {
          setExplosions((prev) => prev.filter((e) => e.id !== id))
        }, 1000)
      }, (newHeart.delay + newHeart.duration) * 1000)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  const playSound = () => {
    const audio = new Audio(
      'https://cdn.pixabay.com/download/audio/2022/03/15/audio_9c3b99cb6b.mp3?filename=click-124467.mp3'
    )
    audio.play()
    triggerParticles()
  }

  const triggerParticles = () => {
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * -100 - 50,
      size: Math.random() * 8 + 4,
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 800)
  }

  const handleComecar = () => {
    playSound()
    setTimeout(() => {
      router.push('/CadastroPerfil')
    }, 500)
  }

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050] flex items-center justify-center text-white px-4">
      {/* Corações flutuantes */}
      <div className="absolute inset-0 z-0">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: heart.targetY }}
            transition={{ duration: heart.duration, delay: heart.delay }}
            className="absolute text-pink-400 select-none"
            style={{ left: `${heart.left}%`, fontSize: `${heart.size}px`, top: '100%' }}
          >
            💖
          </motion.div>
        ))}
        {explosions.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 1, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 0, scale: 2.5, rotate: 1080 }}
            transition={{ duration: 1 }}
            className="absolute text-yellow-300 text-2xl pointer-events-none animate-ping"
            style={{ left: `${e.left}%`, top: `calc(100% + ${e.top})` }}
          >
            🎇
          </motion.div>
        ))}
      </div>

      {/* Partículas do clique */}
      <div className="absolute z-20 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{ opacity: 0, x: p.x, y: p.y }}
            transition={{ duration: 0.8 }}
            className="absolute bg-pink-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-8 py-12 bg-gradient-to-br from-[#2e2f4f]/70 to-[#1a1c2c]/70 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_#f472b6] w-full max-w-3xl border border-white/30 hover:shadow-[0_0_60px_#f472b6aa] transition-shadow duration-500"
      >
        {/* "Logo" minimalista com animação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-pink-400 shadow-lg flex items-center justify-center relative">
            {/* Ícones sobrepostos e animados */}
            <motion.div
              initial={{ scale: 0, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Heart size={44} className="text-pink-400 drop-shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, x: -10, y: -10 }}
              animate={{ scale: 1, x: 0, y: 0 }}
              transition={{ delay: 0.35, type: "spring" }}
              className="absolute left-8 top-6 bg-[#1a1c2c] rounded-full p-1"
            >
              <CheckCircle2 size={28} className="text-emerald-400" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, x: 10, y: -10 }}
              animate={{ scale: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute right-8 top-6 bg-[#1a1c2c] rounded-full p-1"
            >
              <Users size={28} className="text-blue-400" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.65, type: "spring" }}
              className="absolute left-1/2 bottom-5 -translate-x-1/2 bg-[#1a1c2c] rounded-full p-0.5"
            >
              <Star size={24} className="text-yellow-300" />
            </motion.div>
          </div>
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
  )
}