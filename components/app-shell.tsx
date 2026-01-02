"use client"

import React, { useEffect, useState } from "react"
import { Loader } from "@/components/loader"

export function AppShell({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (showLoader) {
    return <Loader />
  }

  return <>{children}</>
}
