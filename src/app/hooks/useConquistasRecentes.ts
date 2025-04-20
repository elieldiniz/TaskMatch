// src/app/hooks/useConquistasRecentes.ts
export type ConquistaChave = 'completou3' | 'primeiroDelegou' | 'estrela';

export function useConquistasRecentes(conquistas: string[]): ConquistaChave[] {
  const recentes: ConquistaChave[] = [];
  if (conquistas.includes('completou3')) recentes.push('completou3');
  if (conquistas.includes('primeiroDelegou')) recentes.push('primeiroDelegou');
  if (conquistas.includes('estrela')) recentes.push('estrela');
  return recentes;
}