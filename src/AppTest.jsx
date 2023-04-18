import useData from '../hooks/useData'
import useFetch from '../hooks/useFetch'

export default function AppTest() {
  const { data, loading, setPage, hasMore } = useData()
  const { lastElementRef } = useFetch({
    loading,
    setPage,
    hasMore
  })

  return (
    <div className='app'>
      <h1>Star Wars Starships</h1>
      {
        data && data.map((s, i) => {
          const isLast = data.length === i + 1

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
