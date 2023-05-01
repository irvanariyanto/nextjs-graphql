import { useQuery, gql } from '@apollo/client'

const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`

type Data = {
  hello: string
}

export default function Home() {
  const { data, error, loading } = useQuery<Data>(HELLO_QUERY)

  if (error) return <div>failed to load</div>
  if (loading) return <div>loading...</div>
  if (!data) return null

  const { hello } = data

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">{hello} </h1>
    </div>
  )
}
