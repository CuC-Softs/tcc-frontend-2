import { createContext, useContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import api from '../services/api'
import {
  AuthContextType,
  AuthResponse,
  SignInData,
  User
} from './AuthContextTypes'
import { toast } from 'react-toastify'

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Get user data if a cookie exists
  useEffect(() => {
    const { 'ifconnect.token': token } = parseCookies()

    if (token && !user) {
      const { 'ifconnect.user': userID } = parseCookies()

      api.get<User>(`/users/${userID}`).then(({ data: user }) => {
        setUser(user)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData): Promise<void> {
    try {
      setIsLoading(true)
      const {
        data: { token, user }
      } = await api.post<AuthResponse>('/auth', {
        email,
        password
      })

      api.defaults.headers.common.Authorization = `Bearer ${token.token}`

      setUser(user)

      setCookie(undefined, 'ifconnect.token', token.token, {
        expires: new Date(token.expires_at)
      })

      setCookie(undefined, 'ifconnect.user', String(user.id), {
        expires: new Date(token.expires_at)
      })
      Router.push('/dashboard')
      setIsLoading(false)
    } catch (error) {
      toast.error('Erro na autenticação', { position: 'top-right' })
      setIsLoading(false)
      console.log(error)
    }
  }

  function logOut(): void {
    destroyCookie(undefined, 'ifconnect.token', { path: '/' })
    destroyCookie(undefined, 'ifconnect.user', { path: '/' })

    Router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, logOut, isLoading, setIsLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a auth provider')
  }

  return context
}
