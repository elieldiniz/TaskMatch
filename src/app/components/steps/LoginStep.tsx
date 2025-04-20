'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface LoginStepProps {
  onLogin: (userData: { email: string; password: string }) => void
}

export default function LoginStep({ onLogin }: LoginStepProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setIsLoading(true)
    setError('')
    try {
      // Aqui você pode chamar sua API de autenticação/cadastro
      // Exemplo: await api.login({ email, password })
      await new Promise(res => setTimeout(res, 800)) // simula loading
      onLogin({ email, password })
    } catch {
      setError('Falha ao autenticar. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white px-4 bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-md bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pink-400/30"
      >
        <h2 className="text-3xl font-bold text-center mb-7 text-pink-400">🔑 Acesse ou crie sua conta</h2>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-[#1f2028] text-white placeholder-gray-400 border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-xl bg-[#1f2028] text-white placeholder-gray-400 border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
          autoComplete="current-password"
        />
        {error && (
          <div className="mb-4 text-center text-red-400 font-semibold">{error}</div>
        )}
        <motion.button
          onClick={handleLogin}
          whileHover={{ scale: 1.04, backgroundColor: '#f472b6' }}
          whileTap={{ scale: 0.97 }}
          disabled={!email || !password || isLoading}
          className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-500 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition flex items-center justify-center"
        >
          {isLoading ? (
            <span className="animate-spin mr-2">🔄</span>
          ) : (
            'Entrar / Cadastrar 🚀'
          )}
        </motion.button>
        <p className="text-gray-400 text-xs text-center mt-6">
          Ao continuar, você concorda com nossos{' '}
          <Link
            href="/termos"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-pink-300 hover:text-pink-400 transition"
          >
            Termos de Uso
          </Link>.
        </p>
      </motion.div>
    </main>
  )
}