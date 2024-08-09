import './index.css'
import { Toaster } from '@/components/ui/toaster'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    element: <div>Cadastrar</div>,
  },
])

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}
