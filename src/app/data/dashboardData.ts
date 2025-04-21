
import { CheckCircle, Star, Award, Calendar, TrendingUp, Heart, User } from 'lucide-react'

export const frases = [
  "Juntos somos mais fortes! 💪",
  "Um casal que coopera, prospera! 🌟",
  "Cada tarefa, um passo a mais no amor! 💖",
  "Equipe dos sonhos ativada! 🚀",
  "Vocês são imparáveis juntos! 🔥",
  "O amor está nos detalhes (e nas tarefas)! ✨"
]

export const estatisticas = [
  { label: 'Tarefas concluídas', valor: 128, icon: CheckCircle, color: "text-green-400" },
  { label: 'XP total', valor: 2340, icon: Star, color: "text-yellow-400" },
  { label: 'Nível atual', valor: 7, icon: Award, color: "text-purple-400" },
  { label: 'Dias seguidos', valor: 12, icon: Calendar, color: "text-pink-400" },
]

export const conquistas = [
  { nome: 'Primeira tarefa', desc: 'Você concluiu sua primeira tarefa!', icon: CheckCircle, color: "text-green-400" },
  { nome: 'Meta semanal', desc: 'Completou 7 tarefas em uma semana!', icon: TrendingUp, color: "text-blue-400" },
  { nome: 'Coração de Ouro', desc: 'Enviou 10 recados de carinho!', icon: Heart, color: "text-pink-400" },
]

export const ultimasTarefas = [
  { nome: 'Lavar a louça', quem: 'Você', pontos: 30, status: 'concluída', data: 'Ontem' },
  { nome: 'Regar as plantas', quem: 'Parceiro(a)', pontos: 20, status: 'concluída', data: 'Ontem' },
  { nome: 'Organizar armário', quem: 'Você', pontos: 40, status: 'concluída', data: '2 dias atrás' },
  { nome: 'Limpar o banheiro', quem: 'Parceiro(a)', pontos: 50, status: 'concluída', data: '3 dias atrás' },
]

export const ranking = [
  { nome: 'Você', xp: 1240, icon: User, color: "text-blue-400" },
  { nome: 'Parceiro(a)', xp: 1100, icon: User, color: "text-pink-400" },
]