'use client'

import { Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import useSound from 'use-sound'

export default function BarraXPCompacta({ xp, xpMax, nivel }: { xp: number; xpMax: number; nivel: number }) {
  const percent = Math.min(100, (xp / xpMax) * 100);
  const [showSpark, setShowSpark] = useState(false);
  const [showXpGain, setShowXpGain] = useState(false);
  const prevXp = useRef(xp);

  // Som de XP (trata erro para não quebrar app)
  const [playXp] = useSound('/xp-gain.mp3', { volume: 0.5, onerror: () => {} });

  // Gera tamanhos fixos para as partículas (evita erro de hidratação)
  const sparkSizes = useMemo(
    () => Array.from({ length: 7 }, () => 12 + Math.random() * 6),
    []
  );

  // Detecta aumento de XP para animar e tocar som
  useEffect(() => {
    if (xp > prevXp.current) {
      setShowSpark(true);
      setShowXpGain(true);
      if (playXp) playXp();
      setTimeout(() => setShowSpark(false), 900);
      setTimeout(() => setShowXpGain(false), 1200);
    }
    prevXp.current = xp;
  }, [xp, playXp]);

  return (
    <div className="w-full flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#23243a]/90 via-[#2e1065]/80 to-[#312e81]/90 border border-pink-400 shadow-[0_2px_12px_0_rgba(236,72,153,0.15)] relative overflow-visible">
      {/* +XP animado */}
      <AnimatePresence>
        {showXpGain && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -28, scale: 1.2 }}
            exit={{ opacity: 0, y: -40, scale: 0.7 }}
            transition={{ duration: 0.8, type: "tween" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 z-20 pointer-events-none"
            style={{ color: "#fbbf24", fontWeight: 800, textShadow: "0 2px 8px #fff7" }}
          >
            +XP!
          </motion.div>
        )}
      </AnimatePresence>
      {/* Sparkles animado */}
      <motion.span
        className="flex items-center gap-1 text-xs text-yellow-200 font-bold relative"
        animate={showSpark ? { scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, type: "tween" }}
      >
        <Sparkles className="w-4 h-4 drop-shadow-lg" />
        XP
        {/* Partículas de brilho */}
        <AnimatePresence>
          {showSpark && (
            <>
              {[...Array(7)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute"
                  initial={{
                    opacity: 1,
                    scale: 0.7,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: 0,
                    scale: 1.2,
                    x: 18 * Math.cos((i / 7) * 2 * Math.PI),
                    y: 18 * Math.sin((i / 7) * 2 * Math.PI),
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.04, type: "tween" }}
                  style={{
                    left: 12,
                    top: -6,
                    color: "#fbbf24",
                    fontSize: sparkSizes[i],
                    pointerEvents: "none",
                  }}
                >✦</motion.span>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.span>
      <div className="relative flex-1 h-4 bg-[#18122b]/80 rounded-full overflow-hidden border border-pink-300">
        <motion.div
          className="absolute left-0 top-0 h-4 bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500 rounded-full"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.7, type: "spring" }}
        />
        {/* Brilho animado */}
        <motion.div
          className="absolute top-0 left-0 h-4 rounded-full pointer-events-none"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(90deg, #fff7, #fff0 60%)",
            mixBlendMode: "screen",
          }}
          initial={false}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.7, type: "tween" }}
        />
      </div>
      <span className="text-xs text-purple-200 font-bold ml-2">
        {xp}/{xpMax}
      </span>
      <span className="text-xs text-pink-300 font-bold ml-2">Nv {nivel}</span>
    </div>
  );
}