'use client'
import { motion } from 'framer-motion'

interface ConfirmarStepProps {
  perfil: {
    genero: string
    nome: string
    cor: string
    avatar: string
    meuApelido: string
    apelidoParceiro: string
  }
  onConfirmar: () => void
}

export default function ConfirmarStep({ perfil, onConfirmar }: ConfirmarStepProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050] px-4">
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 60, scale: 0.96 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-2xl flex flex-col md:flex-row items-center bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-0 shadow-2xl border border-pink-400/30 overflow-hidden"
      >
        {/* Avatar e cor do perfil */}
        <div className="flex flex-col items-center justify-center bg-[#1f2028] px-8 py-10 md:py-16 h-full">
          <motion.div
            initial={{ scale: 0.7, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-7xl mb-4"
            style={{ filter: 'drop-shadow(0 2px 8px #f472b6aa)' }}
          >
            {perfil.avatar}
          </motion.div>
          <span
            className="inline-block w-10 h-10 rounded-full border-2 border-pink-400 shadow"
            style={{ background: perfil.cor }}
            title="Cor do perfil"
          />
        </div>

        {/* Informações do perfil */}
        <div className="flex-1 w-full px-8 py-10 md:py-16 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-pink-400 mb-4 text-center md:text-left">Confirme seus dados</h2>
            <div className="space-y-3 text-lg">
              <div>
                <span className="font-semibold text-pink-300">Nome:</span> {perfil.nome}
              </div>
              <div>
                <span className="font-semibold text-pink-300">Gênero:</span> {perfil.genero}
              </div>
              <div>
                <span className="font-semibold text-pink-300">Seu apelido:</span> {perfil.meuApelido}
              </div>
              <div>
                <span className="font-semibold text-pink-300">Apelido do parceiro:</span> {perfil.apelidoParceiro}
              </div>
            </div>
          </div>
          <motion.button
            onClick={onConfirmar}
            whileHover={{ scale: 1.03, backgroundColor: '#f472b6' }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition"
          >
            Confirmar e finalizar 🚀
          </motion.button>
        </div>
      </motion.div>
    </main>
  )
}   