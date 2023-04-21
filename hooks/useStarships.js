import { useEffect, useState } from 'react'

const URL = 'https://swapi.dev/api/'

export default function useStarships () {
  const [data, setData] = useState()
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetch(`${URL}/starships?page=${page}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        setData([...(data || []), ...res.results])
        setHasMore(res.next !== null)
        setLoading(false)
      })
  }, [page])

  return { data, loading, hasMore, setPage }
}
