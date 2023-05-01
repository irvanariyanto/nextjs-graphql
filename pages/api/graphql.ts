import { createSchema, createYoga } from 'graphql-yoga'

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
  },
}

const schema = createSchema({
  typeDefs,
  resolvers,
})

export default createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
})
