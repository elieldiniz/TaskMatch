import { Recompensa } from '@/app/types/recompensa/Recompensa'

export const recompensasMock: Recompensa[] = [
  {
    id: 1,
    nome: "Café na Cama ☕",
    custo: 100,
    desbloqueada: false,
    descricao: "Um delicioso café da manhã servido na cama para começar o dia com carinho.",
    historico: []
  },
  {
    id: 2,
    nome: "Noite do Filme 🎬",
    custo: 200,
    desbloqueada: false,
    descricao: "Escolha um filme, prepare a pipoca e aproveite uma noite especial juntos.",
    historico: []
  },
  {
    id: 3,
    nome: "Massagem Relaxante 💆‍♂️",
    custo: 300,
    desbloqueada: true,
    descricao: "Uma massagem relaxante para aliviar o estresse e demonstrar cuidado.",
    historico: ["Você"]
  },
  {
    id: 4,
    nome: "Jantar Especial 🍝",
    custo: 400,
    desbloqueada: false,
    descricao: "Um jantar preparado com carinho, com direito a sobremesa favorita.",
    historico: []
  },
  {
    id: 5,
    nome: "Dia sem Tarefas 💤",
    custo: 500,
    desbloqueada: false,
    descricao: "Um dia inteiro de descanso, sem nenhuma tarefa para se preocupar.",
    historico: []
  },
]