'use client'
import Link from "next/link";
import Tooltip from "@/app/components/comuns/Tooltip";
import AnimatedButton from "@/app/components/botoes/AnimatedButton";
import { ShoppingBag } from "lucide-react";

export default function PainelLojaButton() {
  return (
    <div className="flex justify-end mb-4">
      <Link href="/loja" passHref>
        <Tooltip text="Personalize seu painel!">
          <AnimatedButton
            className="flex items-center gap-2 bg-pink-500/80 hover:bg-pink-600/90 text-white font-bold px-4 py-2 rounded-full shadow border border-pink-300/30 transition-all"
            style={{ fontSize: 16 }}
            aria-label="Ir para a loja de personalização"
          >
            <ShoppingBag className="w-5 h-5" />
            Loja
          </AnimatedButton>
        </Tooltip>
      </Link>
    </div>
  );
}