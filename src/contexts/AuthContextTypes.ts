export type Token = {
  type: string
  token: string
  expires_at: string // eslint-disable-line camelcase
}

export type User = {
  id: number
  email: string
  username: string
  name: string
  remember_me_token: string | null // eslint-disable-line camelcase
  member_id: number // eslint-disable-line camelcase
  created_at: string // eslint-disable-line camelcase
  updated_at: string // eslint-disable-line camelcase
}

export type SignInData = {
  email: string
  password: string
  rememberMe?: boolean
}

export type AuthResponse = {
  token: Token
  user: User
}

export type AuthContextType = {
  user: User
  signIn: (data: SignInData) => Promise<void>
  logOut: () => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}
