'use client'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from '@/app/hooks/useLocalStorage'

export function LogoutButton() {
  const router = useRouter()
  const [, , removeAuth] = useLocalStorage('auth', false)
  const [, , removeUser] = useLocalStorage('user', { email: '' })

  const handleLogout = () => {
    removeAuth()
    removeUser()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-200 text-gray-800 rounded px-4 py-2 font-bold hover:bg-gray-300 transition absolute top-4 right-4 z-50"
    >
      Sair
    </button>
  )
}