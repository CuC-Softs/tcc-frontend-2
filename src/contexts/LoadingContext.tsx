import { createContext, useContext, useState } from 'react'
import GlobalLoading from '../components/GlobalLoading'
import { LoadingContextTypes } from './LoadingContextTypes'

const LoadingContext = createContext<LoadingContextTypes>(
  {} as LoadingContextTypes
)

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const loadingContext: LoadingContextTypes = {
    isLoading,
    setIsLoading
  }
  return (
    <LoadingContext.Provider value={loadingContext}>
      {children}
      <GlobalLoading />
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('use loading hook must be inside of loading provider')
  }
  return context
}
