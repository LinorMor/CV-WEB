'use client'

import { useEffect, useState } from 'react'

// Returns true when the media query matches.
// Initial render is always `false` (matches SSR) to avoid hydration mismatch;
// the real value is applied in an effect right after mount.
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
