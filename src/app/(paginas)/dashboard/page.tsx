'use client'
import { useMemo } from 'react'
import { UserCircle, Star, CheckCircle, Award, TrendingUp, Calendar, Heart, Users, User, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'

const frases = [
  "Juntos somos mais fortes! 💪",
  "Um casal que coopera, prospera! 🌟",
  "Cada tarefa, um passo a mais no amor! 💖",
  "Equipe dos sonhos ativada! 🚀",
  "Vocês são imparáveis juntos! 🔥",
  "O amor está nos detalhes (e nas tarefas)! ✨"
]

const estatisticas = [
  { label: 'Tarefas concluídas', valor: 128, icon: <CheckCircle className="text-green-400" size={28} /> },
  { label: 'XP total', valor: 2340, icon: <Star className="text-yellow-400" size={28} /> },
  { label: 'Nível atual', valor: 7, icon: <Award className="text-purple-400" size={28} /> },
  { label: 'Dias seguidos', valor: 12, icon: <Calendar className="text-pink-400" size={28} /> },
]

const conquistas = [
  { nome: 'Primeira tarefa', desc: 'Você concluiu sua primeira tarefa!', icon: <CheckCircle className="text-green-400" size={22} /> },
  { nome: 'Meta semanal', desc: 'Completou 7 tarefas em uma semana!', icon: <TrendingUp className="text-blue-400" size={22} /> },
  { nome: 'Coração de Ouro', desc: 'Enviou 10 recados de carinho!', icon: <Heart className="text-pink-400" size={22} /> },
]

const ultimasTarefas = [
  { nome: 'Lavar a louça', quem: 'Você', pontos: 30, status: 'concluída', data: 'Ontem' },
  { nome: 'Regar as plantas', quem: 'Parceiro(a)', pontos: 20, status: 'concluída', data: 'Ontem' },
  { nome: 'Organizar armário', quem: 'Você', pontos: 40, status: 'concluída', data: '2 dias atrás' },
  { nome: 'Limpar o banheiro', quem: 'Parceiro(a)', pontos: 50, status: 'concluída', data: '3 dias atrás' },
]

const ranking = [
  { nome: 'Você', xp: 1240, avatar: <User className="w-10 h-10 text-blue-400" /> },
  { nome: 'Parceiro(a)', xp: 1100, avatar: <User className="w-10 h-10 text-pink-400" /> },
]

export default function DashboardPage() {
  const frase = useMemo(() => frases[Math.floor(Math.random() * frases.length)], [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#181926] via-[#23243a] to-[#2d1b2f] py-6 px-1 sm:py-10 sm:px-2 overflow-x-hidden">
      {/* Corações animados no fundo */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <style jsx>{`
          .heart {
            position: absolute;
            animation: float 8s infinite linear;
            opacity: 0.13;
          }
          @keyframes float {
            0% { transform: translateY(100vh) scale(0.8);}
            100% { transform: translateY(-10vh) scale(1.2);}
          }
        `}</style>
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 1.2}s`,
              fontSize: `${20 + i * 8}px`,
              color: i % 2 === 0 ? '#f472b6' : '#a21caf'
            }}
          >💖</span>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Topo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 px-2">
          <div className="flex items-center gap-3 sm:gap-4">
            <UserCircle className="w-14 h-14 sm:w-16 sm:h-16 text-white/80 drop-shadow" />
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                Dashboard do Casal <span className="text-2xl sm:text-3xl">💑</span>
              </h1>
              <p className="text-sm sm:text-base text-pink-300 font-semibold mt-1">{frase}</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-600 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl shadow-lg text-white font-bold text-base sm:text-lg flex items-center gap-2"
          >
            <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-pink-200" />
            Juntos no Nível 7
          </motion.div>
        </div>

        {/* Ranking do casal - Pódio responsivo */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-4 sm:p-8 mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🏆</span> Ranking do casal
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center sm:items-end w-full">
            {ranking.map((p, i) => (
              <motion.div
                key={p.nome}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`
                  flex flex-col items-center justify-end
                  bg-gradient-to-br from-purple-700/60 via-pink-600/40 to-fuchsia-700/60
                  rounded-xl p-4 sm:p-5 shadow border border-purple-300/20
                  w-full sm:w-auto
                  ${i === 0 ? 'ring-4 ring-yellow-400/80 scale-110 z-10' : 'scale-95'}
                  max-w-xs
                `}
                style={{
                  minWidth: 0,
                  minHeight: i === 0 ? 140 : 110,
                }}
              >
                <div className="mb-1 sm:mb-2">
                  {i === 0 ? <span className="text-2xl sm:text-3xl">👑</span> : <span className="text-xl sm:text-2xl">🥈</span>}
                </div>
                <div>{p.avatar}</div>
                <div className="text-base sm:text-lg font-bold text-white mt-1 sm:mt-2">{p.nome}</div>
                <div className="text-xs sm:text-sm text-gray-200">XP: <span className="font-bold text-yellow-300">{p.xp}</span></div>
                {i === 0 && (
                  <div className="text-xs text-yellow-400 font-bold flex items-center gap-1 mt-1 animate-bounce">
                    <Star className="w-4 h-4" /> 1º lugar!
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10 px-1">
          {estatisticas.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-6 flex flex-col items-center shadow-lg transition-transform hover:scale-105 hover:-rotate-1"
            >
              <div className="mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-3xl font-extrabold text-white drop-shadow">{stat.valor}</div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Gráfico de progresso (fake, só visual) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 mb-8 sm:mb-10 shadow-lg">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" /> Progresso semanal 📈
          </h2>
          <div className="flex items-end gap-2 sm:gap-4 h-24 sm:h-32">
            {[60, 80, 100, 40, 90, 70, 50].map((v, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ delay: 0.1 * i, type: "spring" }}
                className="w-5 sm:w-8 rounded-xl bg-gradient-to-t from-pink-500 via-purple-500 to-fuchsia-600 shadow-md flex items-end justify-center"
              >
                <span className="text-[10px] sm:text-xs text-white font-bold mb-1 sm:mb-2">{v}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2 px-1">
            <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
          </div>
        </div>

        {/* Últimas tarefas */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 mb-8 sm:mb-10 shadow-lg">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> Últimas tarefas concluídas 📝
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-[420px] sm:min-w-full text-left">
              <thead>
                <tr>
                  <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Tarefa</th>
                  <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Quem fez</th>
                  <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Pontos</th>
                  <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Quando</th>
                  <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {ultimasTarefas.map((t, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="border-b border-white/10"
                  >
                    <td className="px-2 py-2 text-white text-xs sm:text-base">{t.nome}</td>
                    <td className="px-2 py-2">
                      <span className={`font-bold text-xs sm:text-base ${t.quem === 'Você' ? 'text-blue-400' : 'text-pink-400'}`}>{t.quem}</span>
                    </td>
                    <td className="px-2 py-2 text-purple-300 font-bold text-xs sm:text-base">{t.pontos}</td>
                    <td className="px-2 py-2 text-gray-400 text-xs sm:text-base">{t.data}</td>
                    <td className="px-2 py-2">
                      <span className="inline-block px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] sm:text-xs font-bold">
                        {t.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conquistas */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 shadow-lg">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" /> Conquistas recentes 🏅
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {conquistas.map((c, i) => (
              <motion.div
                key={c.nome}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex-1 bg-gradient-to-br from-purple-700/60 via-pink-600/40 to-fuchsia-700/60 rounded-xl p-4 sm:p-5 flex flex-col items-center shadow border border-purple-300/20"
              >
                <div className="mb-1 sm:mb-2">{c.icon}</div>
                <div className="text-base sm:text-lg font-bold text-white">{c.nome}</div>
                <div className="text-xs sm:text-sm text-gray-200 text-center">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}