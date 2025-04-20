Entendi! Vou atualizar o README para refletir suas imagens específicas na pasta /public/screenshots/, incluindo os mockups de celular para dashboard e tarefas, e os mockups de notebook para as outras telas. Aqui está o README atualizado:

# TaskMatch

<div align="center">
  <img src="https://placehold.co/1200x300?text=TaskMatch+%7C+Organize+Tarefas+em+Dupla" alt="TaskMatch Banner" width="100%">

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/seu-usuario/taskmatch)
  [![Status: Active](https://img.shields.io/badge/Status-Active-green.svg)](https://github.com/seu-usuario/taskmatch)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/seu-usuario/taskmatch/pulls)
  [![Made with React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-14.x-black?logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
</div>

## ✨ Visão Geral

O **TaskMatch** é uma plataforma web inovadora para organização, gamificação e colaboração em tarefas em dupla.  
Com um fluxo de onboarding interativo, painel de conquistas, sistema de recompensas e design responsivo, o TaskMatch oferece uma experiência divertida, produtiva e segura para quem deseja evoluir junto.

---

## 📸 Screenshots

<div align="center">
  <h3>Versão Desktop</h3>
  <p>
    <img src="/public/screenshots/telainicio.png" alt="Tela Inicial" width="400" />
    <img src="/public/screenshots/painel.png" alt="Painel Principal" width="400" />
  </p>
  
  <h3>Versão Mobile</h3>
  <p>
    <img src="/public/screenshots/dashboard.png" alt="Dashboard Mobile" width="200" />
    <img src="/public/screenshots/tarefas.png" alt="Tarefas Mobile" width="200" />
  </p>
</div>

---

## 🧩 Funcionalidades Principais

- **Onboarding Gamificado:** Criação de perfil em múltiplos passos, com animações, personalização e pareamento via código.
- **Painel do Usuário:** Visualização de conquistas, tarefas, recompensas e progresso em tempo real.
- **Sistema de Conquistas e Recompensas:** Ganhe badges, troque pontos por recompensas e evolua de nível.
- **Login/Cadastro Moderno:** Autenticação simples, com link para Termos de Uso e (em breve) login social.
- **Design Responsivo:** Visual glassmorphism, animações suaves, acessibilidade e experiência mobile-first.
- **Privacidade e Segurança:** Em conformidade com LGPD/GDPR, Termos de Uso detalhados e consentimento explícito.
- **Componentização e Escalabilidade:** Estrutura modular, fácil de manter e expandir.

---

## 🏗️ Arquitetura e Estrutura



/app CadastroPerfil.tsx # Fluxo principal de cadastro/onboarding painel.tsx # Painel do usuário autenticado page.tsx # Página inicial /termos page.tsx # Termos de Uso /privacidade page.tsx # Política de Privacidade (em breve)

components/ steps/ # Steps do onboarding painel-components/ # Componentes do painel tarefa/ # Tarefas e modais recompensa/ # Recompensas e modais comuns/ # Toasts, toolkits, etc. ui/ # Botões, barras, UI genérica

contexts/ PerfilContext.tsx # Estado global do perfil

hooks/ useCadastroPerfil.ts # Hook customizado para fluxo de cadastro


- **Gerenciamento de Estado:** Context API + hooks customizados
- **Persistência Temporária:** localStorage durante o onboarding
- **Estilização:** Tailwind CSS + Framer Motion para animações
- **Componentização:** Separação clara de responsabilidades

---

## 🔄 Fluxo do Usuário

```mermaid
flowchart TD
    A[Escolha Inicial] -->|Criar perfil| B[Onboarding Steps]
    A -->|Já tenho perfil| F[LoginStep]
    B --> C[Confirmação]
    C --> D[LoginStep]
    D --> E[Painel]
    F --> E

Onboarding: StepEscolhaInicial → GeneroStep → PerfilStep → ConviteStep → CodigoStep → ApelidosStep → ConfirmarStep → LoginStep
Painel: Após login, acesso a conquistas, tarefas, recompensas e progresso
🛡️ Segurança e Privacidade
Termos de Uso: Página dedicada, detalhada e atualizada (/termos)
Consentimento Explícito: Antes do cadastro
LGPD/GDPR: Direito de acesso, correção, portabilidade e exclusão dos dados
Proteção de Rotas: (em breve) Painel acessível apenas para usuários autenticados
Política de Privacidade: (em breve) Página dedicada e linkada no login/onboarding
Tratamento de Dados Sensíveis: Criptografia, controle de acesso e transparência
🖥️ Tecnologias Utilizadas

Context API (estado global)
(Futuro) NextAuth/Firebase Auth (autenticação real)
(Futuro) Notificações Push, Login Social, API pública
📲 Como Rodar Localmente

Clone o repositório:

git clone https://github.com/seu-usuario/taskmatch.git
cd taskmatch


Instale as dependências:

npm install
# ou
yarn install


Rode o projeto:

npm run dev
# ou
yarn dev


Acesse:
http://localhost:3000

🛣️ Roadmap
 Onboarding interativo e gamificado
 Pareamento via código de convite
 Painel de conquistas, tarefas e recompensas
 Termos de Uso detalhados
 Política de Privacidade
 Autenticação real (NextAuth/Firebase)
 Proteção de rotas e painel
 Recuperação de senha
 Login social (Google, Apple, etc)
 Notificações push
 Sistema de níveis, loja de recompensas e ranking
 Painel administrativo
 API pública
🤝 Como Contribuir

Contribuições são muito bem-vindas!
Veja como participar:

Faça um fork do projeto
Crie uma branch (git checkout -b feature/sua-feature)
Commit suas alterações (git commit -m 'feat: minha contribuição')
Push para a branch (git push origin feature/sua-feature)
Abra um Pull Request

Padrões de código:

Use TypeScript e siga a arquitetura de componentes
Escreva commits claros e descritivos
Sempre documente novas funcionalidades
❓ FAQ

1. O TaskMatch é gratuito?
Sim, o uso é gratuito. Futuras funcionalidades premium podem ser adicionadas.

2. Como meus dados são protegidos?
Seus dados são tratados conforme LGPD/GDPR, com criptografia e consentimento explícito.

3. Posso usar o TaskMatch em equipe?
Atualmente, o foco é em duplas. Futuras versões podem expandir para grupos.

4. Como reportar bugs ou sugerir melhorias?
Abra uma issue ou envie um e-mail para suporte@taskmatch.com.

🔗 Links Úteis
Documentação dos Componentes
Diagramas Visuais
Termos de Uso
Política de Privacidade
📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📬 Contato
E-mail: suporte@taskmatch.com
Issues
LinkedIn do autor

TaskMatch — Organize, conquiste e evolua em dupla!


---

Atualizei o README para incluir suas imagens específicas:

1. **Versão Desktop:**
   - `/public/screenshots/telainicio.png` - Tela inicial do aplicativo
   - `/public/screenshots/painel.png` - Painel principal do aplicativo

2. **Versão Mobile:**
   - `/public/screenshots/dashboard.png` - Dashboard em versão mobile
   - `/public/screenshots/tarefas.png` - Tela de tarefas em versão mobile

Organizei as imagens em duas seções distintas (Desktop e Mobile) para destacar a responsividade do seu aplicativo. As imagens de desktop estão configuradas para exibição mais larga (400px) enquanto as de celular estão em formato mais estreito (200px) para representar melhor as proporções reais dos dispositivos.

Certifique-se de que as imagens estejam realmente na pasta `/public/screenshots/` com os nomes exatos mencionados para que os links funcionem corretamente no GitHub.undefined
