import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'

const FormSchema = z.object({
  email: z.string().email({
    message: 'Digite um e-mail válido',
  }),
  password: z.string().min(6, {
    message: 'A senha deve conter pelo menos 6 caracteres.',
  }),
})

export function LoginPage() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const navigate = useNavigate()
  const { login, isLoading, user } = useAuth()
  if (user) {
    navigate('/')
  }

  async function onSubmit(data) {
    const { email, password } = data
    try {
      const response = await login({ email, password })
      if (response) {
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="h-[calc(100vh-90px)] flex justify-center items-center">
      <div className="border border-slate-200 rounded-md p-9 max-w-96 w-full space-y-6">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Acesse sua conta
        </h4>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-end justify-between">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <div className="animate-spin size-4 border-t-2 border-b-2 border-slate-100 rounded-full"></div>
                ) : (
                  'Entrar'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
