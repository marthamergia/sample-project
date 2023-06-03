const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()

const typeDefs = gql`


  type Client {
    id: ID!
    name: String!
    age: Int
    gender: String
    additionalInfo: [additionalInfo!]
  }
  type additionalInfo {
    company: String!
    email: String!
    phone: String!
    address: String!
  }
  type Query {
    clients: [Client]
  }
`
const clients = [
  {
    id: '1',
    name: 'selam',
    age: '25',
    gender: 'female',
    additionalInfo: {
      company: 'uber',
      email: 'selam@gmail.com',
      phone: '123-456-7890',
      address: 'springfield'
    }
  },
  {
    id: '2',
    name: 'mihret',
    age: '26',
    gender: 'female',
    additionalInfo: {
      company: 'tesla',
      email: 'mercy@gmail.com',
      phone: '122-456-7890',
      address: 'duke street'
    }
  },
  {
    id: '3',
    name: 'yared',
    age: '30',
    gender: 'male',
    additionalInfo: {
      company: 'wells fargo',
      email: 'yared@gmail.com',
      phone: '124-456-7890',
      address: 'alexandria st'
    }
  }
]
const resolvers = {
  Query: {
    clients: () => clients
  }
}

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  const port = 4000;

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});