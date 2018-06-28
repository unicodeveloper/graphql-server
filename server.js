const { ApolloServer, gql } = require('apollo-server');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;


// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => {
      return "Hello world! Now will deploy this server!";
    },
  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});