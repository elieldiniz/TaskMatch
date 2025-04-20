# ADR 001: Início do Projeto e Escolha da Stack

## Status

Proposto

## Data

2025-04-18

## Contexto

Estamos iniciando o desenvolvimento do projeto **TaskMack**, uma aplicação web para gerenciamento de tarefas, conquistas e recompensas. O objetivo é criar uma plataforma moderna, intuitiva e escalável, que permita aos usuários organizar suas atividades e acompanhar seu progresso de forma gamificada.

Para garantir um desenvolvimento eficiente, colaborativo e sustentável, é fundamental definir desde o início a stack tecnológica, os padrões de organização do código, as ferramentas de apoio e as práticas de documentação.

## Decisão

Optamos por adotar as seguintes tecnologias, ferramentas e práticas:

- **Frontend:**  
  Utilizaremos **React** com **Next.js** para renderização server-side e geração de páginas estáticas, proporcionando melhor performance e SEO.  
  O uso de **TypeScript** será obrigatório para garantir tipagem estática, maior segurança e melhor experiência de desenvolvimento.

- **Gerenciamento de estado:**  
  Inicialmente, utilizaremos a **Context API** e hooks do React para gerenciamento de estado global e local.  
  Avaliaremos a necessidade de soluções mais robustas (como Redux ou Zustand) conforme o crescimento do projeto.

- **Estilização:**  
  Adotaremos **CSS Modules** para escopo local de estilos e **Tailwind CSS** para utilitários de estilização rápida e responsiva.

- **Componentização:**  
  Criação de componentes reutilizáveis e desacoplados, como `CardTarefa`, `RecompensaCard`, `ConquistaBadge`, `ModalAdicionarTarefa`, entre outros.  
  Os componentes serão organizados em uma estrutura de pastas clara e documentados conforme necessário.

- **Controle de versão:**  
  Utilizaremos **Git** para versionamento de código, com repositório hospedado no **GitHub**.

- **Padrão de commits:**  
  Adotaremos o padrão **Conventional Commits** para mensagens de commit, facilitando automação e rastreabilidade.

- **Documentação:**  
  Todas as decisões arquiteturais relevantes serão registradas em **ADRs** (Architectural Decision Records).  
  A documentação do projeto será mantida no repositório, incluindo instruções de setup, padrões de código e exemplos de uso dos componentes.

- **Ferramentas de apoio:**  
  - **ESLint** e **Prettier** para padronização e qualidade do código.
  - **Jest** e **React Testing Library** para testes unitários e de integração.
  - **Husky** para hooks de pré-commit e pré-push.

## Alternativas Consideradas

- Utilizar **Redux** desde o início para gerenciamento de estado global.  
  *Rejeitado*: Considerado overkill para o escopo inicial do projeto.

- Utilizar **Styled Components** ou **Emotion** para estilização.  
  *Rejeitado*: Optamos por CSS Modules e Tailwind CSS por simplicidade e performance.

- Utilizar **Vue.js** ou **Angular** como framework principal.  
  *Rejeitado*: A equipe possui maior experiência com React e Next.js.

## Consequências

- A stack escolhida permite rápida prototipação, fácil manutenção e escalabilidade.
- O uso de TypeScript e ferramentas de linting aumenta a qualidade e segurança do código.
- A documentação via ADRs facilita o onboarding de novos membros e o registro de decisões importantes.
- A estrutura modular e componentizada favorece a reutilização e evolução do sistema.
- Possibilidade de integração futura com backend via API REST ou GraphQL, conforme necessidade.

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ADR GitHub Template](https://github.com/joelparkerhenderson/architecture_decision_record)