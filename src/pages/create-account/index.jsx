import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

const FormSchema = z.object({
  email: z.string().email({
    message: 'Digite um e-mail válido',
  }),
  password: z.string().min(8, {
    message: 'A senha deve conter pelo menos 8 caracteres.',
  }),
  cpf: z.number().min(11, {
    message: 'O CPF deve conter 11 números',
  }),
})

export function CreateAccountPage() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      cpf: '',
    },
  })

  function onSubmit(data) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  return (
    <div className="h-[calc(100vh-900px)] flex justify-center items-center">
      <div className="border border-slate-200 rounded-md p-9 max-w-96 w-full space-y-6">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Faça seu cadastro
        </h4>
        <p>Nome completo</p>
        <Input></Input>
        <div className="flex items-end justify-between">
          <Button type="submit">Criar Conta</Button>
          <Link to="/entrar" className="text-slate-500 hover:underline">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  )
}
