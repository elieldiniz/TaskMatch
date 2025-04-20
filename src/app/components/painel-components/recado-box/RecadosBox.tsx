'use client'
import { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'

interface RecadosBoxProps {
  recados: string[]
  onEnviar: (mensagem: string) => void
}

export default function RecadosBox({ recados, onEnviar }: RecadosBoxProps) {
  const [mensagem, setMensagem] = useState('')
  const [aberto, setAberto] = useState(false)

  const enviar = () => {
    if (!mensagem.trim()) return
    onEnviar(mensagem.trim())
    setMensagem('')
  }

  return (
    <>
      {/* Botão flutuante de abrir */}
      {!aberto && (
        <button
          onClick={() => setAberto(true)}
          className="fixed bottom-7 right-7 z-50 bg-gradient-to-br from-pink-400 via-pink-500 to-fuchsia-600 text-white rounded-full shadow-2xl p-4 border-2 border-white/30 backdrop-blur-lg transition-all hover:scale-110 hover:shadow-pink-400/60"
          style={{ boxShadow: '0 4px 32px #f472b6cc' }}
          aria-label="Abrir recados"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Painel flutuante de recados */}
      {aberto && (
        <div
          className="fixed bottom-7 right-7 z-50 w-[92vw] max-w-md rounded-3xl shadow-2xl border border-pink-300/40 animate-fadeInUp"
          style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(18px) saturate(1.5)',
            boxShadow: '0 8px 48px #f472b6cc, 0 1.5px 8px #fff4',
          }}
        >
          {/* Topo com botão fechar */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-100/60 to-white/10 border-b border-pink-200/30">
            <h2 className="text-lg font-bold text-pink-600 flex items-center gap-2 drop-shadow">
              💌 Recados de carinho
            </h2>
            <button
              onClick={() => setAberto(false)}
              className="text-pink-400 hover:text-pink-600 rounded-full p-1 transition"
              aria-label="Fechar"
            >
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Lista de recados */}
          <div className="px-6 py-4 max-h-56 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-pink-400/40">
            {recados.length === 0 ? (
              <p className="text-pink-400 italic text-sm">Nenhum recado enviado ainda... 🥹</p>
            ) : (
              recados.map((msg, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-pink-100/70 to-white/30 text-pink-900 px-4 py-2 rounded-xl text-sm shadow border border-pink-200/30 backdrop-blur"
                  style={{
                    boxShadow: '0 2px 12px #f472b633',
                  }}
                >
                  {msg}
                </div>
              ))
            )}
          </div>

          {/* Input + botão */}
          <div className="flex items-center gap-2 px-6 py-4 bg-white/40 border-t border-pink-200/30">
            <input
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && enviar()}
              className="flex-1 px-4 py-2 rounded-xl bg-white/60 text-pink-700 placeholder-pink-400 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 backdrop-blur"
              placeholder="Escreva um recado carinhoso..."
              style={{
                boxShadow: '0 1px 6px #f472b622',
              }}
            />
            <button
              onClick={enviar}
              className="bg-gradient-to-br from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white p-3 rounded-xl transition flex items-center justify-center shadow-lg"
              style={{
                boxShadow: '0 2px 12px #f472b655',
              }}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Animação */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(.39,.575,.565,1) both;
        }
      `}</style>
    </>
  )
}