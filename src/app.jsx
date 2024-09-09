import { Toaster } from '@/components/ui/toaster'
import '@fontsource/inter'
import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import { CreateAccountPage } from './pages/create-account'
import { DashboardAluno } from './pages/dashboard-aluno'
import { DashboardGeral } from './pages/dashboard-geral'
import { LoginPage } from './pages/login'
import { Solicitacao } from './pages/solicitacao'
import { NotFound } from './pages/not-found'
import { hasRole } from './permissions'
import { AuthProvider, useAuth } from './hooks/use-auth'
import { Header } from './components/header'

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return <Navigate to="/login" replace />
  }

  return children
}

const Dashboard = () => {
  if (hasRole('[ROLE_ALUNO]')) {
    return <DashboardAluno />
  }
  if (hasRole('[ROLE_ADMIN]')) {
    return <DashboardGeral />
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute
        allowedRoles={['[ROLE_ADMIN]', '[ROLE_ADMIN]']}
        children={<Dashboard />}
      />
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/cadastrar',
    element: (
      <PrivateRoute
        allowedRoles={['[ROLE_ADMIN]']}
        children={<CreateAccountPage />}
      />
    ),
  },
  {
    path: '/solicitacao/:id',
    element: (
      <PrivateRoute
        allowedRoles={['[ROLE_ALUNO]', '[ROLE_ADMIN]']}
        children={<Solicitacao />}
      />
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Header />
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </AuthProvider>
  )
}
