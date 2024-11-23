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

import { resetPasswordSchema } from './reset-password-schema'

export function ResetPasswordForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
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

        <Button className="" type="submit" disabled={loading}>
          {loading ? <Loader2 className="size-4 animate-spin" /> : 'Enviar'}
        </Button>

        <div className="flex items-center gap-4">
          <Separator className="w-full shrink" />
          <span className="min-w-max text-xs text-muted-foreground">
            Já possui uma conta?
          </span>
          <Separator className="w-full shrink" />
        </div>

        <Button className="w-full" type="button" variant="outline" asChild>
          <a href={'sign-in'}>Entrar</a>
        </Button>
      </form>
    </Form>
  )
}
