import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const schema = `
  type Post {
    name: String
  }

  # the schema allows the following query:
  type RootQuery {
    post: Post
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: RootQuery
  }
`;

const graphqlSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default graphqlSchema;
