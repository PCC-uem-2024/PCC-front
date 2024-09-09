import { useAuth } from '@/hooks/use-auth'
import { LogOut } from 'lucide-react'

export function Header() {
  const { logout, user } = useAuth()

  return (
    <header className=" border-b border-slate-200 p-4">
      <div className="container flex justify-between">
        <img src="/pcc-icon.svg" alt="Logo PCC" className="w-16" />
        {user && (
          <button
            className="text-red-500 flex items-center gap-2 hover:text-red-800 transition-colors"
            onClick={logout}
          >
            Sair
            <LogOut className="size-4" />
          </button>
        )}
        <img src="/logo-uem.png" alt="Logo UEM" className="w-40" />
      </div>
    </header>
  )
}
