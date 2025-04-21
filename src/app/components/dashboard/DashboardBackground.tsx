'use client'

export function DashboardBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {[...Array(8)].map((_, i) => (
      <span
      key={i}
      className="heart"
      style={{
        left: `${10 + i * 10}%`,              // Distribui os corações horizontalmente
        animationDelay: `${i * 1.2}s`,        // Cada coração começa a animação em um tempo diferente
        fontSize: `${20 + i * 8}px`,          // Tamanhos variados para dar profundidade
        color: i % 2 === 0 ? '#f472b6' : '#a21caf' // Alterna as cores dos corações
      }}
    >
      💖
    </span>
      ))}
    </div>
  )
}