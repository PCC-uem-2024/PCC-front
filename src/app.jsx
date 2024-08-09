import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/entrar',
    element: <div>Entrar</div>,
  },
  {
    path: '/cadastrar',
    element: <div>Cadastrar</div>,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
