'use client'
import React from "react";
import { useBadges } from "@/app/contexts/painel/BadgesContext";
import AnimatedCard from "@/app/components/botoes/AnimatedCard";
import ConquistaBadge from "@/app/components/painel-components/conquista/ConquistaBadge";
import { Award, Star } from "lucide-react";

const iconComponents = {
  award: Award,
  star: Star,
};

export default function PainelBadges() {
  const { allBadges, isBadgeDesbloqueado } = useBadges();

  return (
    <div className="my-8">
      <h2 className="text-lg font-bold mb-2 text-yellow-400">Badges</h2>
      <div className="flex gap-3 flex-wrap">
        {allBadges.map((badge) => {
          const Icon = iconComponents[badge.icon];
          const desbloqueado = isBadgeDesbloqueado(badge.id);
          return (
            <AnimatedCard
              key={badge.id}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 * badge.id }}
              whileHover={{ scale: 1.08 }}
              className={`animate-fadeInUp ${!desbloqueado ? "opacity-40 grayscale" : ""}`}
            >
              <ConquistaBadge icon={<Icon size={18} />} texto={badge.texto} />
            </AnimatedCard>
          );
        })}
      </div>
    </div>
  );
}