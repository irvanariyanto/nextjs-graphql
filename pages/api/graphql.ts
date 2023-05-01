import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export default startServerAndCreateNextHandler(server)
