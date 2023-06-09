const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()

const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    age: Int
    gender: String
    additionalinfo: [additionalInfo]!
  }

  type additionalInfo {
    company: String!
    email: String!
    phone: String!
    address: String!
    user: [Client]!
  }

  type Query {
    clients: [Client]
    additionalinfo: [additionalInfo]
  }
`

const clients = [
  {
    id: '59761c23b30d971669fb42ff',
    age: 36,
    name: 'Dunlap Hubbard',
    gender: 'male',
    additionalinfo: []
  },
  {
    id: '59761c233d8d0f92a6b0570d',
    age: 24,
    name: 'Kirsten Sellers',
    additionalinfo: []
  },
  {
    id: '59761c23fcb6254b1a06dad5',
    age: 30,
    name: 'Acosta Robbins',
    additionalinfo: []
  }
]

const additionalInfo = [
  {
    company: 'CEDWARD',
    email: 'dunlaphubbard@cedward.com',
    phone: '+1 (890) 543-2508',
    address: '169 Rutledge Street, Konterra, Northern Mariana Islands, 8551',
    id: '59761c23b30d971669fb42ff'
  },
  {
    company: 'EMERGENT',
    email: 'kirstensellers@emergent.com',
    phone: '+1 (831) 564-2190',
    address: '886 Gallatin Place, Fannett, Arkansas, 4656',
    id: '59761c233d8d0f92a6b0570d'
  },
  {
    company: 'ORGANICA',
    email: 'acostarobbins@organica.com',
    phone: '+1 (882) 441-3367',
    address: '697 Linden Boulevard, Sattley, Idaho, 1035',
    id: '59761c23fcb6254b1a06dad5'
  }
]

const resolvers = {
  Query: {
    clients: () => clients,
    additionalinfo: () => additionalInfo
  }
}

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers })

  await server.start()

  server.applyMiddleware({ app })

  const port = 4000

  app.listen(port, () => {
    console.log(
      `Server running at http://localhost:${port}${server.graphqlPath}`
    )
  })
}

startServer().catch((error) => {
  console.error('Error starting server:', error)
})
