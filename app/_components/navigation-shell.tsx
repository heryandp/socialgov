"use client"

import { useEffect, useState } from "react"
import { Navigation } from "./navigation"

export function NavigationShell() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Navigation />
}
