export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        className="h-auto w-8 object-contain"
        alt="Logo"
        src="/src/assets/logo.svg"
      />

      <h2 className="text-2xl font-semibold tracking-tight">Iron Challenge</h2>
    </div>
  )
}
