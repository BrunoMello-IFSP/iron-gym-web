import { CalendarCheck, CalendarClock, LogOut } from 'lucide-react'

import { Logo } from '@/components/logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { CreateEventModal } from '../event/create-event-modal'
import { ThemeDropdownMenu } from '../theme/theme-dropdown-menu'

export function Header() {
  return (
    <header className="flex h-auto w-full justify-center bg-card shadow-md">
      <div className="flex h-auto w-full max-w-7xl items-center gap-4 p-3">
        <Logo />

        <nav className="flex flex-1 items-center justify-between gap-3">
          <ul className="flex size-auto gap-1">
            <li>
              <Button
                className="flex size-auto items-center gap-2 rounded-lg"
                variant="outline"
              >
                <CalendarClock />
                Eventos
              </Button>
            </li>

            <li>
              <Button
                className="flex size-auto items-center gap-2 rounded-lg"
                variant="outline"
              >
                <CalendarCheck />
                Minhas inscrições
              </Button>
            </li>
          </ul>

          <ul className="flex size-auto gap-1">
            <li>
              <CreateEventModal />
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex size-auto items-center gap-3">
          <div className="flex size-auto items-center gap-3">
            <div className="flex size-auto flex-col items-end justify-center">
              <span className="text-sm">Olá Bruno!</span>
              <span className="text-xs text-muted-foreground">
                bruno@gmail.com
              </span>
            </div>

            <Avatar className="size-8 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <Button
            className="flex size-8 items-center justify-center rounded-lg p-0"
            variant="outline"
          >
            <LogOut />
          </Button>

          <Separator className="h-8 w-px" orientation="vertical" />

          <ThemeDropdownMenu />
        </div>
      </div>
    </header>
  )
}
