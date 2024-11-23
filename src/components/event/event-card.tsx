import { Badge } from '@/components/ui/badge'

export function EventCard() {
  return (
    <div className="relative h-auto min-h-96 w-full rounded-lg pb-[100%]">
      <img
        alt="Imagem do evento"
        src="/src/assets/bg-sign-up.jpeg"
        className="absolute inset-0 z-10 size-full rounded-lg object-cover"
      />

      <div className="absolute z-20 flex size-full flex-col items-start gap-1 rounded-lg bg-gradient-to-t from-zinc-950 to-transparent p-3">
        <div className="flex h-auto w-full flex-col gap-1">
          <Badge className="ml-auto rounded-lg text-xs" variant="secondary">
            Nome do evento
          </Badge>

          <Badge className="ml-auto rounded-lg" variant="secondary">
            05 de Janeiro de 2025
          </Badge>
        </div>

        <div className="mt-auto flex h-auto w-full flex-col gap-1">
          <Badge className="mr-auto text-xs" variant="secondary">
            Inscrições
          </Badge>

          <Badge className="mr-auto rounded-lg text-xs" variant="secondary">
            10/12/2024 até 20/12/2024
          </Badge>
        </div>

        <div className="flex h-auto w-full flex-col gap-1">
          <Badge className="mr-auto rounded-lg text-xs" variant="secondary">
            Categorias
          </Badge>

          <div className="flex w-full flex-wrap gap-1">
            <Badge className="rounded-lg text-xs" variant="secondary">
              Supino
            </Badge>

            <Badge className="rounded-lg text-xs" variant="secondary">
              Agachamento
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
