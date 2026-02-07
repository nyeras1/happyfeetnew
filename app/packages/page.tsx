"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"

function PackagesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  useEffect(() => {
    const q = searchParams.toString()
    router.replace(`/destinations${q ? `?${q}` : ""}`)
  }, [router, searchParams])

  return null
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PackagesContent />
    </Suspense>
  )
}
