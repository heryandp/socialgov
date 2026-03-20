import type { ReactNode } from "react"
import { NavigationShell } from "./navigation-shell"

export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <NavigationShell />
      <div className="lg:pl-[4.5rem] xl:pl-[15.5rem]">
        <div className="min-h-screen pb-16 lg:pb-0">{children}</div>
      </div>
    </div>
  )
}
