export type Conquista = {
    id: string
    texto: string
    icon: string
    color: string
  }
  
  export const conquistasMock: Conquista[] = [
    {
      id: 'completou3',
      texto: '3 tarefas completas',
      icon: 'Medal',
      color: 'text-yellow-300'
    },
    {
      id: 'usouIA',
      texto: 'Usou IA',
      icon: 'Brain',
      color: 'text-emerald-300'
    },
    {
      id: 'delegou1',
      texto: 'Delegou 1 tarefa',
      icon: 'HeartHandshake',
      color: 'text-rose-300'
    },
    {
      id: 'enviouRecado',
      texto: 'Enviou 1 recado',
      icon: 'Sparkles',
      color: 'text-pink-300'
    },
    {
      id: 'criadorTarefas',
      texto: 'Criou 1 tarefa',
      icon: 'Wrench',
      color: 'text-orange-400'
    },
    {
      id: 'superCasal',
      texto: 'Ambos fizeram 5 tarefas',
      icon: 'Heart',
      color: 'text-pink-400'
    },
    {
      id: 'exploradorIA',
      texto: 'Explorador da IA',
      icon: 'Brain',
      color: 'text-purple-300'
    },
    {
      id: 'recadoDoAmor',
      texto: '3 recados de amor',
      icon: 'Sparkles',
      color: 'text-pink-400'
    },
    {
      id: 'desbloqueador',
      texto: 'Desbloqueou tudo!',
      icon: 'BadgeCheck',
      color: 'text-green-400'
    }
  ]