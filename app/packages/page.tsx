"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function PackagesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  useEffect(() => {
    const q = searchParams.toString()
    router.replace(`/destinations${q ? `?${q}` : ""}`)
  }, [router, searchParams])

  return null
}
