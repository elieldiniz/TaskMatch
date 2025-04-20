export type Tarefa = {
    id: number;
    nome: string;
    pontos: number;
    feita: boolean;
    responsavel: 'voce' | 'parceiro';
  };
  
  export const tarefasMock: Tarefa[] = [
    { id: 1, nome: "Tarefa 1", pontos: 50, feita: false, responsavel: "voce" },
    { id: 2, nome: "Tarefa 2", pontos: 30, feita: false, responsavel: "parceiro" },
    // ...adicione mais se quiser
  ];