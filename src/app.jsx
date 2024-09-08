import { Toaster } from '@/components/ui/toaster'
import '@fontsource/inter'
import { createBrowserRouter, Link, Navigate, RouterProvider } from 'react-router-dom'

import './index.css'
import { CreateAccountPage } from './pages/create-account'
import { DashboardAluno } from './pages/dashboard-aluno'
import { DashboardGeral } from './pages/dashboard-geral'
import { LoginPage } from './pages/login'
import { Solicitacao } from './pages/solicitacao'
import { NotFound } from './pages/not-found'
import { hasRole } from './permissions'
import { AuthProvider, useAuth } from './hooks/use-auth'

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
  if (hasRole('aluno')) {
    return <DashboardAluno />
  }
  if (hasRole('geral')) {
    return <DashboardGeral />
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute
        allowedRoles={['aluno', 'geral']}
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
      <PrivateRoute allowedRoles={['geral']} children={<CreateAccountPage />} />
    ),
  },
  {
    path: '/solicitacao/:id',
    element:
    <PrivateRoute
      allowedRoles={['aluno', 'geral']}
      children={<Solicitacao />}
    />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
export function App() {
  return (
    <div className="min-h-screen">
      <header className=" border-b border-slate-200 p-4">
        <div className="container flex justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src="/pcc-icon.svg" alt="Logo PCC" className="w-16" />
          </a>
          <img src="/logo-uem.png" alt="Logo UEM" className="w-40" />
        </div>
      </header>

      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  )
}
