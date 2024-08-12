import { Toaster } from '@/components/ui/toaster'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { DashboardPage } from './pages/dashboard'
import { LoginPage } from './pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/entrar',
    element: <LoginPage />,
  },
  {
    path: '/cadastrar',
    element: <CreateAccountPage />,
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
