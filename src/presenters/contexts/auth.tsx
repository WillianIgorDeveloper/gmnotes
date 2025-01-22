import { ErrorHandler } from "@components/error-handler"
import { env } from "@utils"
import { createContext, useContext, useEffect, useState } from "react"

interface IAuthContext {
  // States
  sessionIsLoading: boolean
  hasSession: boolean
  token: string | undefined
  // Functions
  handleLogin: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)
export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [sessionIsLoading, setSessionIsLoading] = useState<boolean>(true)
  const [hasSession, setHasSession] = useState<boolean>(false)
  const [token, setToken] = useState<string | undefined>(undefined)

  async function handleLogin() {
    try {
      setSessionIsLoading(true)
      const { token } = { token: "temp" }
      localStorage.setItem(env.VITE_SESSION_TOKEN, token)
      setToken(token)
      setHasSession(true)
    } catch (error) {
      ErrorHandler({ error })
    } finally {
      setSessionIsLoading(false)
    }
  }

  async function logout() {
    setSessionIsLoading(true)
    localStorage.removeItem(env.VITE_SESSION_TOKEN)
    setToken(undefined)
    setHasSession(false)
    setSessionIsLoading(false)
  }

  useEffect(() => {
    async function initialLoad() {
      const token = localStorage.getItem(env.VITE_SESSION_TOKEN)

      if (token) {
        try {
          setToken(token)
          setHasSession(true)
        } catch (error) {
          ErrorHandler({ error })
        } finally {
          setSessionIsLoading(false)
        }
      }

      setSessionIsLoading(false)
    }
    initialLoad()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        sessionIsLoading,
        hasSession,
        token,
        handleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
