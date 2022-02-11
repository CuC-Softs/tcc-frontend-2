import { createContext, useContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import api from '../services/api'
import withReactContent from 'sweetalert2-react-content'
import sweetAlert2 from 'sweetalert2'
import {
  AuthContextType,
  AuthResponse,
  SignInData,
  User
} from './AuthContextTypes'
import theme from '../styles/theme'

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  const swal = withReactContent(sweetAlert2)

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
      swal.fire({
        title:
          error.response?.data?.errors[0]?.message || 'Erro na autenticação',
        icon: 'error',
        iconColor: 'red',
        confirmButtonColor: theme.palette.error.main
      })
      setIsLoading(false)
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
