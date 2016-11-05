import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const schema = `
  type Player {
    playerId: String
    first_name: String
    fppg: Int
    game: String
    injury_details: String
    injury_indicator: String
    last_name: String
    opponent: String
    played: Int
    position: String
    salary: Int
    team: String
  }

  # the schema allows the following query:
  type RootQuery {
    players: [Player]
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
