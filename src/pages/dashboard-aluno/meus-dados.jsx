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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  nome: z.string().min(2).max(50),
})

const formPasswordSchema = z.object({
  novaSenha: z.string(),
  confirmarSenha: z.string(),
})

export function MeusDados() {
  const formPassword = useForm({
    resolver: zodResolver(formPasswordSchema),
    defaultValues: {
      senhaAntiga: '',
      novaSenha: '',
      confirmarSenha: '',
    },
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      cpf: '',
      email: '',
      matricula: '',
      usuario: '',
      dataIngresso: '',
    },
  })

  function onSubmit(values) {
    alert('alterar cadastro')
    console.log(values)
  }

  function onSubmitPassword(values) {
    alert('alterar senha')
    console.log(values)
  }

  return (
    <div className="border border-slate-200 p-5 rounded-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-4 w-full"
        >
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail institucional</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="matricula"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Matrícula/Registro</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="usuario"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de usuário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Mestrando">Mestrando</SelectItem>
                      <SelectItem value="Doutorando">Doutorando</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="data_ingresso"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de ingresso</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="md:w-40" type="submit">
            Salvar dados
          </Button>
        </form>
      </Form>
      <Form {...formPassword}>
        <form
          onSubmit={formPassword.handleSubmit(onSubmitPassword)}
          className="grid md:grid-cols-3 gap-4 mt-5"
        >
          <FormField
            control={formPassword.control}
            name="senhaAntiga"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Senha antiga</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="novaSenha"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Nova senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="confirmarSenha"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button className="md:w-40" type="submit">
            Salvar senha
          </Button>
        </form>
      </Form>
    </div>
  )
}
