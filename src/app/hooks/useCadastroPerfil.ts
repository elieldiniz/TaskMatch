// src/app/hooks/useCadastroPerfil.ts
'use client'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export interface PerfilCadastro {
  genero: string
  nome: string
  cor: string
  avatar: string
  meuApelido: string
  apelidoParceiro: string
}

export function useCadastroPerfil() {
  const [step, setStep] = useState(0)
  const [perfil, setPerfil] = useState<PerfilCadastro>({
    genero: '',
    nome: '',
    cor: '#f472b6',
    avatar: '🐶',
    meuApelido: '',
    apelidoParceiro: '',
  })

  // Simula código de convite vindo do backend
  const [codigoConvite, setCodigoConvite] = useState<string>('')

  const router = useRouter()

  // Avança para o próximo passo
  const avancarStep = useCallback(() => setStep(s => s + 1), [])

  // Volta para o passo anterior (opcional)
  const voltarStep = useCallback(() => setStep(s => Math.max(0, s - 1)), [])

  // Atualiza parte do perfil
  const atualizarPerfil = useCallback((dados: Partial<PerfilCadastro>) => {
    setPerfil(p => ({ ...p, ...dados }))
  }, [])

  // Gera código de convite (mock)
  const gerarCodigoConvite = useCallback(() => {
    const novoCodigo = Math.random().toString(36).substring(2, 8).toUpperCase()
    setCodigoConvite(novoCodigo)
    return novoCodigo
  }, [])

  // Chame isso no useEffect do componente quando chegar no passo do convite
  // ou chame manualmente quando necessário

  // Finaliza o cadastro (simula envio para API)
  const finalizarCadastro = useCallback(() => {
    // Aqui você pode enviar o perfil para a API real futuramente
    // Exemplo: await fetch('/api/cadastro', { method: 'POST', body: JSON.stringify(perfil) })
    // Simula delay
    setTimeout(() => {
      router.push('/painel')
    }, 800)
  }, [perfil, router])

  return {
    step,
    setStep,
    perfil,
    atualizarPerfil,
    avancarStep,
    voltarStep,
    codigoConvite,
    setCodigoConvite,
    gerarCodigoConvite,
    finalizarCadastro,
  }
}