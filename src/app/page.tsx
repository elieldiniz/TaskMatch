import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-pink-600">🎉 Bem-vindos ao TaskMatch!</h1>
          <p className="text-gray-600 mb-6 text-lg">
            O jeito divertido de casais organizarem as tarefas do dia a dia 💖
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Casal"
            className="w-40 mx-auto mb-6"
          />
          <button
            onClick={() => setStep(1)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg"
          >
            Começar agora 🚀
          </button>
        </div>
      </main>
    );
  }

  if (step === 1) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
          <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">👤 Crie seu perfil</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select className="w-full px-4 py-2 rounded-xl border border-gray-300">
              <option>Escolha um avatar</option>
              <option>🐱 Gato Fofo</option>
              <option>🐶 Cachorro Alegre</option>
              <option>🐰 Coelho Doce</option>
              <option>🦊 Raposa Charmosa</option>
            </select>
            <label className="block text-sm text-gray-600">Cor do perfil:</label>
            <input
              type="color"
              className="w-full h-12 rounded-xl"
              defaultValue="#f472b6"
            />
            <button
              onClick={() => setStep(2)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-xl mt-4"
            >
              Continuar 💫
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (step === 2) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
          <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">💑 Conecte seu par</h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            Compartilhe este código com seu parceiro(a) para formar o casal no app:
          </p>
          <div className="text-center text-2xl font-mono bg-indigo-100 text-indigo-700 rounded-xl py-3 mb-4">
            #C3UPLA
          </div>
          <p className="text-center text-sm text-gray-500 mb-2">ou insira um código recebido:</p>
          <input
            type="text"
            placeholder="#CÓDIGO"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 text-center"
          />
          <button
            onClick={() => setStep(3)}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-xl mt-4"
          >
            Entrar no casal 💕
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-6 flex flex-col items-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">TaskMatch 💖</h1>
        <p className="text-center text-gray-600 mb-6">Organize suas tarefas em casal de forma divertida!</p>

        <section className="space-y-4">
          <div className="bg-purple-100 p-4 rounded-xl">
            <h2 className="font-semibold">👥 Casal</h2>
            <p className="text-sm text-gray-600">João 💙 & Maria 💖</p>
          </div>

          <div className="bg-pink-100 p-4 rounded-xl">
            <h2 className="font-semibold">📅 Tarefas de Hoje</h2>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Lavar a louça - João (25 pts)</li>
              <li>Arrumar a cama - Maria (10 pts)</li>
              <li>Alimentar o pet - Livre (10 pts)</li>
            </ul>
          </div>

          <div className="bg-yellow-100 p-4 rounded-xl">
            <h2 className="font-semibold">🎮 Pontuação</h2>
            <p className="text-sm">João: 85 pts | Maria: 100 pts</p>
          </div>

          <div className="bg-green-100 p-4 rounded-xl">
            <h2 className="font-semibold">🎁 Recompensas</h2>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Café na cama (300 pts)</li>
              <li>Filme escolhido (200 pts)</li>
              <li>Dia de folga (800 pts)</li>
            </ul>
          </div>
        </section>

        <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl">
          + Nova Tarefa
        </button>
      </div>
    </main>
  );
}
