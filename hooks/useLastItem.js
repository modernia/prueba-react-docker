import { useCallback, useRef } from 'react'

export default function useLastItem ({ loading, setPage, hasMore }) {
  const observer = useRef()

  const lastElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return { lastElementRef }
}
