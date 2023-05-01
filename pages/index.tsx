import useSWR from 'swr'

const fetcher = (query: string) =>
  fetch('api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

type Data = {
  hello: string
}

export default function Home() {
  const { data, error, isLoading } = useSWR<Data>('{hello}', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!data) return null

  const { hello } = data

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">{hello} </h1>
    </div>
  )
}
