import { getAllPlayers } from './dynamodb.connector.js';

const resolvers = {
  RootQuery: {
    player() {
      return getAllPlayers( 'Fandual' );
    },
  },
};

export default resolvers;
