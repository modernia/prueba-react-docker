import useStarships from '../hooks/useStarships'
import useLastItem from '../hooks/useLastItem'

export default function AppTest() {
  const { data, loading, setPage, hasMore } = useStarships()
  const { lastElementRef } = useLastItem({
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
