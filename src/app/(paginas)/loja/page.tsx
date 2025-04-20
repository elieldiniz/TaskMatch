'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Lista de recompensas
const itensLoja = [
  {
    id: 1,
    nome: "🧸 Pelúcia virtual",
    tipo: "colecionavel",
    preco: 70,
    descricao: "Item colecionável que aparece ao lado do avatar.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-4xl">🧸</span>
        <span className="text-pink-200 text-xs">Pelúcia ao lado do avatar</span>
      </div>
    ),
  },
  {
    id: 2,
    nome: "👑 Coroa do amor",
    tipo: "destaque",
    preco: 150,
    descricao: "Destaque real no topo do perfil por 1 semana.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-3xl">👑</span>
        <span className="text-pink-200 text-xs">Coroa no perfil</span>
      </div>
    ),
  },
  {
    id: 3,
    nome: "🌈 Efeito mágico",
    tipo: "efeito",
    preco: 90,
    descricao: "Partículas brilhosas ao completar tarefas.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl animate-pulse">✨🌈✨</span>
        <span className="text-pink-200 text-xs">Partículas mágicas</span>
      </div>
    ),
  },
  {
    id: 4,
    nome: "💠 Moldura do perfil",
    tipo: "avatar",
    preco: 110,
    descricao: "Borda especial animada em volta do avatar.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-3xl">💠</span>
        <span className="text-pink-200 text-xs">Moldura animada</span>
      </div>
    ),
  },
  {
    id: 5,
    nome: "🖼️ Tema especial",
    tipo: "tema",
    preco: 160,
    descricao: "Altera fundo do painel (estrelas, flores etc).",
    preview: (
      <div>
        <div className="w-24 h-6 rounded-lg mb-2" style={{
          background: "linear-gradient(90deg, #a21caf 0%, #f472b6 50%, #fbbf24 100%)"
        }} />
        <span className="text-pink-200 text-xs">Fundo especial</span>
      </div>
    ),
  },
  {
    id: 6,
    nome: "🐾 Mascote fofo",
    tipo: "pet",
    preco: 200,
    descricao: "Um pet animado que aparece na tela.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-3xl">🐾</span>
        <span className="text-pink-200 text-xs">Mascote animado</span>
      </div>
    ),
  },
  {
    id: 7,
    nome: "✨ Trilha brilhante",
    tipo: "efeito",
    preco: 80,
    descricao: "Efeito de rastro ao clicar ou completar tarefa.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">✨✨✨</span>
        <span className="text-pink-200 text-xs">Trilha brilhante</span>
      </div>
    ),
  },
  {
    id: 8,
    nome: "🌀 Transição especial",
    tipo: "efeito",
    preco: 100,
    descricao: "Nova animação de entrada das telas.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl animate-spin">🌀</span>
        <span className="text-pink-200 text-xs">Transição animada</span>
      </div>
    ),
  },
  {
    id: 9,
    nome: "🎇 Explosão de confetes",
    tipo: "efeito",
    preco: 130,
    descricao: "Ao subir de nível, aparece explosão colorida.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">🎇🎉</span>
        <span className="text-pink-200 text-xs">Confetes ao subir de nível</span>
      </div>
    ),
  },
  {
    id: 10,
    nome: "🎵 Tema musical",
    tipo: "efeito",
    preco: 90,
    descricao: "Música de fundo romântica ativada por 24h.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">🎵❤️</span>
        <span className="text-pink-200 text-xs">Música romântica</span>
      </div>
    ),
  },
  {
    id: 11,
    nome: "💬 Balão de fala amoroso",
    tipo: "efeito",
    preco: 75,
    descricao: "Exibe frases fofas aleatórias no painel.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">💬💕</span>
        <span className="text-pink-200 text-xs">Frases fofas</span>
      </div>
    ),
  },
  {
    id: 12,
    nome: "🌟 Avatar brilhante",
    tipo: "avatar",
    preco: 120,
    descricao: "Avatar com efeito de brilho pulsante.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-3xl animate-pulse">🌟</span>
        <span className="text-pink-200 text-xs">Brilho pulsante</span>
      </div>
    ),
  },
  {
    id: 13,
    nome: "🧁 Ícone de tarefa doce",
    tipo: "tarefa",
    preco: 85,
    descricao: "Tarefas ficam com ícones em forma de doces.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">🧁🍬</span>
        <span className="text-pink-200 text-xs">Ícones doces</span>
      </div>
    ),
  },
  {
    id: 14,
    nome: "🏰 Modo contos de fadas",
    tipo: "tema",
    preco: 180,
    descricao: "Elementos gráficos estilo conto de fadas.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">🏰✨</span>
        <span className="text-pink-200 text-xs">Contos de fadas</span>
      </div>
    ),
  },
  {
    id: 15,
    nome: "🎭 Expressões do avatar",
    tipo: "avatar",
    preco: 95,
    descricao: "Permite trocar humor/expressões do avatar.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">😃😐😢</span>
        <span className="text-pink-200 text-xs">Expressões do avatar</span>
      </div>
    ),
  },
  {
    id: 16,
    nome: "🌺 Aura personalizada",
    tipo: "efeito",
    preco: 100,
    descricao: "Anel de cor animado em volta do nome.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">🌺🟢</span>
        <span className="text-pink-200 text-xs">Aura animada</span>
      </div>
    ),
  },
  {
    id: 17,
    nome: "📸 Selfie do casal",
    tipo: "avatar",
    preco: 220,
    descricao: "Avatar duplo com foto ou emoji personalizado.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">👩‍❤️‍👨📸</span>
        <span className="text-pink-200 text-xs">Avatar duplo</span>
      </div>
    ),
  },
  {
    id: 18,
    nome: "🌌 Tema galáctico",
    tipo: "tema",
    preco: 160,
    descricao: "Fundo com estrelas cadentes e luas.",
    preview: (
      <div>
        <div className="w-24 h-6 rounded-lg mb-2" style={{
          background: "linear-gradient(90deg, #0f172a 0%, #818cf8 50%, #f472b6 100%)"
        }} />
        <span className="text-pink-200 text-xs">Fundo galáctico</span>
      </div>
    ),
  },
  {
    id: 19,
    nome: "🔥 Modo fogos de artifício",
    tipo: "efeito",
    preco: 140,
    descricao: "Ao finalizar tarefa, aparecem fogos.",
    preview: (
      <div className="flex flex-col items-center">
        <span className="text-2xl">🎆🔥</span>
        <span className="text-pink-200 text-xs">Fogos ao concluir tarefa</span>
      </div>
    ),
  },
];

// TooltipPreview animado
function TooltipPreview({
  children,
  preview,
}: {
  children: React.ReactNode;
  preview: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-3 px-4 py-3 rounded-2xl bg-[#23243a] text-white text-sm shadow-2xl border border-pink-400/30 min-w-[180px] max-w-xs"
            style={{ pointerEvents: "none" }}
          >
            {preview}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// Confete animado ao comprar
function Confete() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0, scale: 0.7 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20 - Math.random() * 120, -220 - Math.random() * 120],
            x: [0, (Math.random() - 0.5) * 400],
            scale: [0.7, 1.2, 0.8]
          }}
          transition={{ duration: 1.2, delay: i * 0.05 }}
          className="absolute text-3xl"
          style={{
            color: ["#f472b6", "#a21caf", "#fbbf24", "#22d3ee", "#22c55e"][i % 5],
            left: `${30 + Math.random() * 40}%`
          }}
        >🎉</motion.span>
      ))}
    </div>
  );
}

export default function LojaPage() {
  const [xp, setXp] = useState(400);
  const [comprados, setComprados] = useState<number[]>([]);
  const [showConfete, setShowConfete] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  function comprarItem(id: number, preco: number, nome: string) {
    if (xp >= preco && !comprados.includes(id)) {
      setXp(xp - preco);
      setComprados([...comprados, id]);
      setShowConfete(true);
      setToast(`Parabéns! Você desbloqueou: ${nome}`);
      setTimeout(() => setShowConfete(false), 1200);
      setTimeout(() => setToast(null), 2200);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181926] via-[#23243a] to-[#2d1b2f] flex flex-col items-center py-10 px-4">
      <AnimatePresence>{showConfete && <Confete />}</AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg font-bold text-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full max-w-2xl flex items-center justify-between mb-8">
        <Link href="/" className="flex items-center gap-2 text-pink-300 hover:text-pink-400 font-bold">
          <ArrowLeft className="w-6 h-6" />
          Voltar
        </Link>
        <div className="flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow border border-purple-200 font-bold text-purple-700">
          <span className="text-yellow-400">✨</span>
          XP: <span className="ml-1">{xp}</span>
        </div>
      </div>
      <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
        <ShoppingBag className="w-8 h-8 text-pink-400 animate-bounce" />
        Loja de Personalização
      </h1>
      <p className="text-pink-200 mb-8">Troque seu XP por temas, avatares, emojis e efeitos exclusivos!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full max-w-2xl">
        {itensLoja.map(item => (
          <motion.div
            key={item.id}
            whileHover={{
              scale: 1.07,
              rotate: -2,
              boxShadow: "0 0 32px #f472b6cc, 0 0 8px #a21caf99",
              filter: "brightness(1.08)"
            }}
            className={`
              bg-gradient-to-br from-[#2b2c3a]/80 via-[#3a2940]/70 to-[#2b2c3a]/80
              rounded-2xl p-6 flex flex-col items-center shadow-xl border-2 relative
              ${comprados.includes(item.id) ? "border-emerald-400 opacity-80" : "border-pink-500/30"}
              transition-all
              group
            `}
          >
            <div className="mb-2 relative">
              <TooltipPreview preview={item.preview}>
                <span className="text-3xl">{item.nome.split(" ")[0]}</span>
              </TooltipPreview>
              {comprados.includes(item.id) && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1 shadow-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-white mb-1 text-center">{item.nome}</h2>
            <p className="text-pink-200 text-sm mb-3 text-center">{item.descricao}</p>
            <button
              disabled={comprados.includes(item.id) || xp < item.preco}
              onClick={() => comprarItem(item.id, item.preco, item.nome)}
              className={`
                px-5 py-2 rounded-full font-bold text-white mt-2
                ${comprados.includes(item.id)
                  ? "bg-emerald-500/80 cursor-not-allowed"
                  : xp < item.preco
                    ? "bg-gray-400/60 cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-95"}
                shadow-md transition-all
              `}
            >
              {comprados.includes(item.id)
                ? "Comprado!"
                : `Comprar por ${item.preco} XP`}
            </button>
            {/* Selo de comprado */}
            {comprados.includes(item.id) && (
              <span className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                Comprado
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}