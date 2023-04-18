import { useCallback, useEffect, useRef, useState } from 'react'

const URL = 'https://swapi.dev/api/'

export default function App() {
  const [starships, setStarships] = useState()
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const observer = useRef()

  useEffect(() => {
    console.log(page)
    setLoading(true)
    fetch(`${URL}/starships?page=${page}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setStarships([...(starships || []), ...res.results])
        setHasMore(res.next !== null)
        setLoading(false)
      })
  }, [page])

  const lastElementRef = useCallback(node => {
    console.log('node')

    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <div className='app'>
      <h1>Star Wars Starships</h1>
      {
        starships && starships.map((s, i) => {
          const isLast = starships.length === i + 1

          return isLast
            ? (
              <div key={i} ref={lastElementRef}>
                <h2>{s.name}</h2>
                <p>Model: {s.model}</p>
              </div>)
            : (
              <div key={i}>
                <h2>{s.name}</h2>
                <p>Model: {s.model}</p>
              </div>)
        })

      }
    </div>
  )
}
