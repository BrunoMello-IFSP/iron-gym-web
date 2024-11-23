import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
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
import { Separator } from '@/components/ui/separator'

import { signInSchema } from './sign-in-schema'

export function SignInForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setLoading(true)
    console.log(values)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <Form {...form}>
      <form
        className="flex h-auto w-full flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informe seu email:"
                  type="text"
                  {...field}
                />
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
              <FormLabel>Senha:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informe sua senha:"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <a
          className="ml-auto text-xs text-muted-foreground hover:underline"
          href={'/auth/reset-password'}
        >
          Esqueceu sua senha?
        </a>

        <Button className="" type="submit" disabled={loading}>
          {loading ? <Loader2 className="size-4 animate-spin" /> : 'Entrar'}
        </Button>

        <div className="flex h-auto w-full gap-4">
          <Button
            className="w-full"
            type="submit"
            variant="outline"
            disabled={loading}
          >
            Google
          </Button>

          <Button
            className="w-full"
            type="submit"
            variant="outline"
            disabled={loading}
          >
            Apple
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Separator className="w-full shrink" />
          <span className="min-w-max text-xs text-muted-foreground">
            Não tem uma conta?
          </span>
          <Separator className="w-full shrink" />
        </div>

        <Button className="w-full" type="button" variant="outline" asChild>
          <a href={'sign-up'}>Criar conta</a>
        </Button>
      </form>
    </Form>
  )
}
