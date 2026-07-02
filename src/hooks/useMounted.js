'use client'

import { useEffect, useState } from 'react'

// False during SSR and the first client render, true after mount.
// Use to gate client-only preferences (reduced-motion, media queries) so the
// initial render is identical on server and client (no hydration mismatch).
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}
