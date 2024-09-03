import { toast } from '@/components/ui/use-toast'
import { api } from '@/lib/axios'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem('user'))
      setUser(storedUser)
    }
    setIsLoading(false)
  }, [])

  const login = async (credentials) => {
    setIsLoading(true)
    const { email, password } = credentials

    try {
      const response = await api.post('/login', { email, password })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        localStorage.setItem('refreshToken', data.refreshToken)
        localStorage.setItem(
          'user',
          JSON.stringify({ email: data.email, role: data.role }),
        )
        setUser({ email: data.email, role: data.role })
        return true
      } else {
        toast({
          title: 'Erro',
          description: 'Usuário ou senha inválidos',
          status: 'error',
        })
        return false
      }
    } catch (error) {
      toast({
        title: <span className="h text-red-500">Erro</span>,
        description: 'Ocorreu um erro ao efetuar o login',
      })
      console.log(error)

      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
