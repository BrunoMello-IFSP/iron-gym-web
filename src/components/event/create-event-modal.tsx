import { CalendarPlus2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CreateEventModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="flex size-auto items-center gap-2 rounded-lg"
          variant="outline"
        >
          <CalendarPlus2 />
          Criar Evento
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>Cadastrar novo evento:</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para cadastrar um novo evento.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">Conteúdo:</div>

        <DialogFooter>
          <Button type="submit">Cadastrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
