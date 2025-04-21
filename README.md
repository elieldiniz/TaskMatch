
# 💖 TaskMatch

<div align="center">
  <img src="/public/screenshots/banner.png" alt="Banner TaskMatch" width="100%" style="border-radius: 12px; margin-bottom: 24px;" />
</div>

<div align="center">

[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/Status-Ativo-green.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-bem--vindos-brightgreen.svg)](https://github.com/elieldimz/taskmatch/pulls)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14.x-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-0055FF?logo=framer&logoColor=white)

</div>

---

## ✨ Sobre o Projeto

O **TaskMatch** é uma plataforma web inovadora para organização, gamificação e colaboração em tarefas em dupla.  
Com onboarding interativo, painel de conquistas, sistema de recompensas e design responsivo, o TaskMatch oferece uma experiência divertida, produtiva e segura para quem deseja evoluir junto.

---

## 🎬 Demonstração Visual

<div align="center">

### 💻 Desktop

<img src="/public/screenshots/telainicio.png" alt="Tela Inicial" width="400" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
<img src="/public/screenshots/painel.png" alt="Painel Principal" width="400" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />

### 📱 Mobile

<img src="/public/screenshots/dashboard.png" alt="Dashboard Mobile" width="180" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
<img src="/public/screenshots/tarefas.png" alt="Tarefas Mobile" width="180" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />

</div>

---

## 🚀 Funcionalidades

- 🎮 **Onboarding Gamificado:** Criação de perfil em múltiplos passos, com animações, personalização e pareamento via código.
- 🏆 **Painel do Usuário:** Visualização de conquistas, tarefas, recompensas e progresso em tempo real.
- 🎖️ **Sistema de Conquistas e Recompensas:** Ganhe badges, troque pontos por recompensas e evolua de nível.
- 🔐 **Login/Cadastro Moderno:** Autenticação simples, com link para Termos de Uso e (em breve) login social.
- 📱 **Design Responsivo:** Visual glassmorphism, animações suaves, acessibilidade e experiência mobile-first.
- 🛡️ **Privacidade e Segurança:** Em conformidade com LGPD/GDPR, Termos de Uso detalhados e consentimento explícito.
- 🧩 **Componentização e Escalabilidade:** Estrutura modular, fácil de manter e expandir.

---

## 🗂️ Estrutura do Projeto

```text
/app
  CadastroPerfil.tsx         # Fluxo principal de cadastro/onboarding
  painel.tsx                 # Painel do usuário autenticado
  page.tsx                   # Página inicial
  /termos
    page.tsx                 # Termos de Uso
  /privacidade
    page.tsx                 # Política de Privacidade (em breve)

components/
  steps/                     # Steps do onboarding
  painel-components/         # Componentes do painel
  tarefa/                    # Tarefas e modais
  recompensa/                # Recompensas e modais
  comuns/                    # Toasts, toolkits, etc.
  ui/                        # Botões, barras, UI genérica

contexts/
  PerfilContext.tsx          # Estado global do perfil

hooks/
  useCadastroPerfil.ts       # Hook customizado para fluxo de cadastro

🔄 Fluxo do Usuário
flowchart TD
    A[Escolha Inicial] -->|Criar perfil| B[Onboarding Steps]
    A -->|Já tenho perfil| F[LoginStep]
    B --> C[Confirmação]
    C --> D[LoginStep]
    D --> E[Painel]
    F --> E

🛡️ Segurança e Privacidade
Termos de Uso: Página dedicada, detalhada e atualizada (/termos)
Consentimento Explícito: Antes do cadastro
LGPD/GDPR: Direito de acesso, correção, portabilidade e exclusão dos dados
Proteção de Rotas: (em breve) Painel acessível apenas para usuários autenticados
Política de Privacidade: (em breve) Página dedicada e linkada no login/onboarding
Tratamento de Dados Sensíveis: Criptografia, controle de acesso e transparência
🖥️ Tecnologias Utilizadas
React 18.x
Next.js 14.x
TypeScript 5.x
Tailwind CSS 3.x
Framer Motion 10.x
Context API (estado global)
ESLint e Prettier (padronização de código)
(Futuro) NextAuth/Firebase Auth, Notificações Push, Login Social, API pública
⚙️ Como Executar Localmente
# Clone o repositório
git clone https://github.com/elieldimz/taskmatch.git
cd taskmatch

# Instale as dependências
npm install
# ou
yarn install

# Rode o projeto
npm run dev
# ou
yarn dev


Acesse: http://localhost:3000

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

Faça um fork do projeto
Crie uma branch (git checkout -b feature/sua-feature)
Commit suas alterações (git commit -m 'feat: minha contribuição')
Push para a branch (git push origin feature/sua-feature)
Abra um Pull Request

Padrões de código:

Use TypeScript e siga a arquitetura de componentes
Escreva commits claros e descritivos
Sempre documente novas funcionalidades
❓ Perguntas Frequentes
🔗 Links Úteis
Termos de Uso
Política de Privacidade
Diagramas Visuais
📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📬 Contato
E-mail: suporte@taskmatch.com
Issues
LinkedIn do autor

TaskMatch — Organize, conquiste e evolua em dupla!



