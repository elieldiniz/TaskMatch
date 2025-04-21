'use client'
export function DashboardBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <style jsx>{`
        .heart {
          position: absolute;
          animation: float 8s infinite linear;
          opacity: 0.13;
        }
        @keyframes float {
          0% { transform: translateY(100vh) scale(0.8);}
          100% { transform: translateY(-10vh) scale(1.2);}
        }
      `}</style>
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${10 + i * 10}%`,
            animationDelay: `${i * 1.2}s`,
            fontSize: `${20 + i * 8}px`,
            color: i % 2 === 0 ? '#f472b6' : '#a21caf'
          }}
        >💖</span>
      ))}
    </div>
  )
}