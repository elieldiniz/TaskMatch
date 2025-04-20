'use client'
import { motion } from 'framer-motion'

interface PerfilStepProps {
  nome: string
  setNome: (nome: string) => void
  avatar: string
  setAvatar: (avatar: string) => void
  cor: string
  setCor: (cor: string) => void
  onNext: () => void
}

export default function PerfilStep({
  nome,
  setNome,
  avatar,
  setAvatar,
  cor,
  setCor,
  onNext,
}: PerfilStepProps) {
  return (
    <main className="min-h-screen flex items-center justify-center text-white px-4 bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-md bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pink-400/30"
      >
        <h2 className="text-3xl font-bold text-center mb-7 text-pink-400 flex items-center justify-center gap-2">
          👤 <span>Crie seu perfil</span>
        </h2>
        <label className="block text-pink-300 font-semibold mb-2" htmlFor="nome">
          Nome
        </label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-[#1f2028] text-white placeholder-gray-400 border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
        <label className="block text-pink-300 font-semibold mb-2" htmlFor="avatar">
          Avatar
        </label>
        <select
          id="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-[#1f2028] text-white border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        >
          <option value="🐶">🐶 Cachorro</option>
          <option value="🐱">🐱 Gato</option>
          <option value="🐰">🐰 Coelho</option>
          <option value="🦊">🦊 Raposa</option>
        </select>
        <div className="flex items-center justify-between mb-8">
          <label className="text-pink-300 font-semibold">Cor do perfil:</label>
          <input
            type="color"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            className="w-12 h-12 rounded-full border-2 border-pink-400 outline-none"
          />
        </div>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.04, backgroundColor: '#f472b6' }}
          whileTap={{ scale: 0.97 }}
          disabled={!nome}
          className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-500 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition"
        >
          Continuar 💫
        </motion.button>
      </motion.div>
    </main>
  )
}