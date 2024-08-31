import { Toaster } from '@/components/ui/toaster'
import '@fontsource/inter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { CreateAccountPage } from './pages/create-account'
import { DashboardAluno } from './pages/dashboard-aluno'
import { DashboardGeral } from './pages/dashboard-geral'
import { LoginPage } from './pages/login'
import { NotFound } from './pages/not-found'
import { hasRole } from './permissions'

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
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/cadastrar',
    element: <CreateAccountPage />,
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
          <img src="/pcc-icon.svg" alt="Logo PCC" className="w-16" />
          <img src="/logo-uem.png" alt="Logo UEM" className="w-40" />
        </div>
      </header>

      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}
