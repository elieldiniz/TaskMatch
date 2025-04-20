Claro! Aqui está a documentação do frontend do TaskMatch, formatada como um documento README.md para o GitHub.
Você pode copiar, colar e adaptar conforme desejar!

# 🎨 TaskMatch – Frontend

Painel gamificado de tarefas para casais, com XP, conquistas, recompensas, recados e personalização.

---

## 🚀 Tecnologias e Bibliotecas

| Tecnologia         | Versão Recomendada | Descrição                                                                 | Link Oficial                  |
|--------------------|-------------------|---------------------------------------------------------------------------|-------------------------------|
| **Next.js**        | ^14.x             | Framework React para SSR, SSG, rotas e otimização de apps web modernas.    | [nextjs.org](https://nextjs.org/) |
| **React**          | ^18.x             | Biblioteca para construção de interfaces de usuário baseadas em componentes.| [react.dev](https://react.dev/)   |
| **TypeScript**     | ^5.x              | Superset do JavaScript com tipagem estática.                              | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Tailwind CSS**   | ^3.x              | Framework CSS utilitário para estilização rápida e responsiva.             | [tailwindcss.com](https://tailwindcss.com/) |
| **Framer Motion**  | ^10.x             | Animações e transições fluidas para React.                                | [framer.com/motion](https://www.framer.com/motion/) |
| **Lucide React**   | ^0.300.x          | Coleção de ícones SVG modernos para React.                                | [lucide.dev](https://lucide.dev/) |
| **use-sound**      | ^4.x              | Hook React para tocar sons facilmente.                                    | [github.com/joshwcomeau/use-sound](https://github.com/joshwcomeau/use-sound) |
| **next/font**      | nativo Next.js    | Carregamento otimizado de fontes do Google.                               | [nextjs.org/docs/app/building-your-application/optimizing/fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) |

---

## 🏗️ Estrutura de Pastas



/app /components /painel-components BarraXPCompacta.tsx TopoPainel.tsx CardTarefa.tsx ConquistasTopo.tsx RecadosBox.tsx ModalAdicionarTarefa.tsx RecompensaCard.tsx ... /loja page.tsx /painel page.tsx layout.tsx globals.css /public /sounds xp-gain.mp3 /images ...


---

## 🧩 Principais Componentes

- **BarraXPCompacta**: Barra de XP animada, com partículas, som e responsiva.
- **TopoPainel**: Saudação, avatar, conquistas recentes, menu de perfil e barra de XP.
- **CardTarefa**: Exibe tarefa, pontos, responsável e botão de concluir.
- **ConquistasTopo**: Mostra conquistas recentes e badges.
- **RecadosBox**: Painel flutuante para recados carinhosos.
- **ModalAdicionarTarefa**: Modal para adicionar novas tarefas.
- **RecompensaCard**: Card de recompensa com nome, custo, descrição, histórico e modal de detalhes.
- **EfeitoVisual**: Animações de partículas e efeitos de XP/conquistas.

---

## 🎨 Estilização

- **Tailwind CSS** para todos os utilitários de layout, cor, tipografia, responsividade e efeitos.
- **Customização fácil** de temas, gradientes e bordas.
- **Responsividade** garantida em todos os componentes.

---

## 🌀 Animações e Feedback

- **Framer Motion** para transições, partículas, efeitos de entrada/saída e animações de XP.
- **use-sound** para feedback sonoro ao ganhar XP, concluir tarefas, desbloquear recompensas, etc.
- **Lucide React** para ícones modernos e personalizáveis.

---

## 🖼️ Assets

- **Imagens e sons** ficam em `/public` (ex: `/public/sounds/xp-gain.mp3`).
- **Fontes** importadas via `next/font` para performance e identidade visual.

---

## 🔗 Integração com Backend

- Consumo de endpoints via `fetch`, `axios`, SWR ou React Query.
- Autenticação via JWT (armazenado em cookie seguro ou localStorage).
- Sincronização de estado global (XP, tarefas, conquistas, recompensas, recados).
- Atualização em tempo real (opcional: WebSockets para recados).

---

## 📦 Padrões de Código e Boas Práticas

- **Componentização**: Cada parte da interface é um componente reutilizável.
- **TypeScript**: Tipagem em todas as props, estados e funções.
- **Responsividade**: Teste em mobile, tablet e desktop.
- **Acessibilidade**: Uso de `aria-label`, foco em navegação por teclado e contraste de cores.
- **Feedback visual e sonoro**: Todas as ações importantes têm retorno imediato ao usuário.
- **Separação de responsabilidades**: Lógica de dados separada da apresentação visual.
- **Uso de hooks**: Para estados, efeitos, memoização e sons.

---

## 📝 Exemplo de Uso de Componentes

```tsx
import BarraXPCompacta from "@/app/components/painel-components/BarraXPCompacta";

<BarraXPCompacta xp={xp} xpMax={xpMax} nivel={nivel} />

🛠️ Dicas de Desenvolvimento
Use o modo de desenvolvimento do Next.js para hot reload e debugging.
Utilize o DevTools do React para inspecionar estados e props.
Teste as animações e sons em diferentes navegadores.
Mantenha o código limpo, comentado e versionado (Git).
📚 Links Úteis
Documentação Next.js
Documentação React
Documentação TypeScript
Documentação Tailwind CSS
Framer Motion
Lucide React
use-sound
Google Fonts Next.js

Com essa base, o frontend do TaskMatch é moderno, performático, acessível, bonito e fácil de evoluir!

---
