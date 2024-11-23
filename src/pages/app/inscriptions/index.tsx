import { EventCard } from '@/components/event/event-card'
import { Header } from '@/components/header'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export function Inscriptions() {
  return (
    <div className="flex size-full min-h-screen flex-col items-center">
      <Header />

      <main className="flex w-full max-w-7xl flex-col gap-3 p-3">
        {/* <div className="ml-auto flex h-auto w-full max-w-80 gap-3">
          <Input placeholder="Buscar por cidade..." />
          <Button>Buscar</Button>
        </div> */}

        <Separator className="h-px w-full" orientation="horizontal" />

        <div className="flex h-auto w-full flex-col gap-3">
          <h1 className="text-2xl font-semibold">Minhas inscrições:</h1>

          <div className="grid w-full grid-cols-4 gap-4">
            <EventCard />
          </div>
        </div>
      </main>
    </div>
  )
}
