import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue))
      } catch {
        // Trate erros se necessário
      }
    }
  }, [key, storedValue])

  const setValue = (value: T | ((val: T) => T)) => {
    setStoredValue(prev => (typeof value === 'function' ? (value as (val: T) => T)(prev) : value))
  }

  const remove = () => {
    setStoredValue(initialValue)
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key)
    }
  }

  return [storedValue, setValue, remove] as const
}