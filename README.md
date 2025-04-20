Claro! Aqui está o conteúdo **pronto para colar diretamente no seu repositório GitHub** como `README.md`. Basta copiar e colar:

---

```md
# 🎯 TaskMatch

<div align="center">
  <img src="/public/screenshot/banner.png" alt="Banner TaskMatch" width="100%" style="border-radius: 12px; margin-bottom: 24px;" />
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

O **TaskMatch** é uma aplicação web interativa desenvolvida para casais organizarem tarefas, celebrarem conquistas e se manterem alinhados de forma divertida.  
O app transforma o cotidiano em uma experiência envolvente e recompensadora — fortalecendo laços e melhorando a colaboração com leveza e design encantador.

---

## 🎨 Demonstração Visual

Abaixo algumas capturas que demonstram como o TaskMatch se adapta a qualquer tela e oferece uma navegação agradável:

<div align="center">

### 💻 Versão Desktop

<table>
  <tr>
    <td align="center">
      <img src="/public/screenshots/telainicio.png" alt="Tela Inicial" width="400" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
      <br><sub><b>🧭 Onboarding — tela de início</b></sub>
    </td>
    <td align="center">
      <img src="/public/screenshots/painel.png" alt="Painel Principal" width="400" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
      <br><sub><b>📋 Painel Principal — tarefas, conquistas e recados</b></sub>
    </td>
  </tr>
</table>

### 📱 Versão Mobile

<table>
  <tr>
    <td align="center">
      <img src="/public/screenshots/dashabord.png" alt="Dashboard Mobile" width="180" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
      <br><sub><b>📱 Dashboard — progresso individual</b></sub>
    </td>
    <td align="center">
      <img src="/public/screenshots/tarefas.png" alt="Tarefas Mobile" width="180" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
      <br><sub><b>✅ Tarefas Mobile — conclusão com toque animado</b></sub>
    </td>
  </tr>
</table>

</div>

---

## 🚀 Funcionalidades

- 🧩 Cadastro interativo em múltiplas etapas
- 🧠 Sugestões de tarefas com IA
- 🏅 Sistema de conquistas automáticas
- 🎁 Recompensas desbloqueáveis com XP
- 💌 Envio de recados românticos
- 👥 Pareamento via código exclusivo
- 🔒 Termos e segurança compatíveis com LGPD/GDPR
- 📱 Visual responsivo e adaptável a mobile

---

## 🧱 Arquitetura do Projeto

A estrutura foi pensada com foco em modularidade, clareza e escalabilidade.

```
src/
├── app/                    # Páginas principais da aplicação
│   ├── painel.tsx          # Painel do usuário
│   ├── termos/page.tsx     # Termos de uso
│   └── privacidade/        # Política de privacidade
│
├── components/             # Componentes reutilizáveis
│   ├── steps/              # Telas do fluxo de onboarding
│   ├── painel/             # Cabeçalhos, status, conquistas
│   ├── tarefa/             # Cards, modais, botões de tarefas
│   ├── recompensa/         # Cards e lógica de recompensas
│   ├── comuns/             # Toasts, ícones, animações e UI
│
├── contexts/               # Gerenciadores de estado global
├── hooks/                  # Lógicas reutilizáveis e custom hooks
└── utils/                  # Funções auxiliares e validações
```

---

## 💡 Itens da Lojinha

| Nome                | Descrição                                      | Custo |
|---------------------|-----------------------------------------------|-------|
| 🧸 Pelúcia Virtual   | Item decorativo para perfil/avatar            | 70 XP |
| 👑 Coroa do Amor     | Destaque no perfil por 7 dias                 | 150 XP|
| 🌈 Efeito Mágico     | Animação extra ao concluir tarefa             | 90 XP |
| 💠 Moldura Avatar    | Borda animada especial no avatar              | 110 XP|
| 🎨 Tema Especial     | Altera o plano de fundo do painel             | 130 XP|

---

## ⚙️ Como Rodar Localmente

```bash
# Clone o projeto
git clone https://github.com/elieldimz/taskmatch.git
cd taskmatch

# Instale as dependências
npm install

# Rode o app
npm run dev

# Acesse:
http://localhost:3000
```

---

## 🛣️ Roadmap

- [x] Cadastro com pareamento por código
- [x] Sugestão de tarefas via IA
- [x] Conquistas automáticas
- [x] Recompensas com XP
- [ ] Autenticação real com Firebase/Auth
- [ ] Proteção de rotas e painel privado
- [ ] Loja de personalização
- [ ] Notificações push
- [ ] API pública

---

## 🤝 Como Contribuir

1. Faça um fork
2. Crie uma branch: `git checkout -b feature/sua-feature`
3. Commit: `git commit -m 'feat: minha feature'`
4. Push: `git push origin feature/sua-feature`
5. Abra um Pull Request

---

## 🔐 Privacidade e Segurança

- Termos e consentimento explícito
- Dados protegidos e criptografados
- LGPD/GDPR aplicado desde o design
- Autenticação e proteção de rotas (em breve)

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE).

---

## 📬 Contato

- E-mail: suporte@taskmatch.com
- Issues: [Acompanhe e reporte aqui](https://github.com/elieldimz/taskmatch/issues)
- LinkedIn: [Seu nome ou link aqui]

---

**TaskMatch** — Organize, evolua e celebre conquistas ao lado de quem você ama. 💖
```

---

Se quiser, posso converter esse conteúdo num arquivo `.md` direto para download. Deseja isso também?