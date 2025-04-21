// hooks/useAuthGuard.ts
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useAuthGuard() {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('auth')
      if (!isAuth) {
        router.push('/login')
      }
    }
  }, [router])
}