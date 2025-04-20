'use client'
import { useEffect } from 'react'
import StepEscolhaInicial from '@/app/components/steps/StepEscolhaInicial'
import GeneroStep from '@/app/components/steps/GeneroStep'
import PerfilStep from '@/app/components/steps/PerfilStep'
import ConviteStep from '@/app/components/steps/ConviteStep'
import CodigoStep from '@/app/components/steps/CodigoStep'
import ApelidosStep from '@/app/components/steps/ApelidosStep'
import ConfirmarStep from '@/app/components/steps/ConfirmarStep'
import LoginStep from '@/app/components/steps/LoginStep'
import { useCadastroPerfil } from '@/app/hooks/useCadastroPerfil'

export default function CadastroPerfil() {
  const {
    step,
    setStep, // adicione isso no seu hook!
    perfil,
    atualizarPerfil,
    avancarStep,
    finalizarCadastro,
    codigoConvite,
    gerarCodigoConvite,
  } = useCadastroPerfil()

  // Gera o código de convite ao chegar no passo do convite
  useEffect(() => {
    if (step === 3 && !codigoConvite) {
      gerarCodigoConvite()
    }
  }, [step, codigoConvite, gerarCodigoConvite])

  // Array de steps
  const steps = [
    <StepEscolhaInicial
      key="escolha"
      onCriarPerfil={() => setStep(1)}
      onAcessarPerfil={() => setStep(steps.length - 1)}
    />,
    <GeneroStep
      key="genero"
      genero={perfil.genero}
      setGenero={g => atualizarPerfil({ genero: g })}
      onNext={avancarStep}
    />,
    <PerfilStep
      key="perfil"
      nome={perfil.nome}
      setNome={nome => atualizarPerfil({ nome })}
      avatar={perfil.avatar}
      setAvatar={avatar => atualizarPerfil({ avatar })}
      cor={perfil.cor}
      setCor={cor => atualizarPerfil({ cor })}
      onNext={avancarStep}
    />,
    <ConviteStep
      key="convite"
      codigo={codigoConvite || '...'}
      onProsseguir={avancarStep}
    />,
    <CodigoStep
      key="codigo"
      onConfirmar={() => avancarStep()}
      onPular={() => avancarStep()}
    />,
    <ApelidosStep
      key="apelidos"
      onConfirmar={({ meuApelido, parceiroApelido }) => {
        atualizarPerfil({ meuApelido, apelidoParceiro: parceiroApelido })
        avancarStep()
      }}
    />,
    <ConfirmarStep
      key="confirmar"
      perfil={perfil}
      onConfirmar={avancarStep}
    />,
    <LoginStep
      key="login"
      onLogin={finalizarCadastro}
    />
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050] text-white flex items-center justify-center">
      <div className="w-full max-w-md">
        {steps[step]}
      </div>
    </main>
  )
}