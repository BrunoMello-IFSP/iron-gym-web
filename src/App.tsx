import { ThemeProvider } from '@/components/theme/theme-provider'
import { Home } from '@/pages/app/home'
// import { SignIn } from '@/pages/auth/sign-in'
// import { SignUp } from '@/pages/auth/sign-up'
// import { ResetPassword } from '@/pages/auth/reset-password'
// import { Inscriptions } from '@/pages/app/inscriptions'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Inscriptions /> */}
      {/* <SignIn /> */}
      <Home />
      {/* <SignUp /> */}
      {/* <ResetPassword /> */}
    </ThemeProvider>
  )
}
