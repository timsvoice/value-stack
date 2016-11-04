import { getAllPlayers } from 'dynamodb.connector.js';

const resolvers = {
  RootQuery: {
    player() {
      return {
        getAllPlayers();
      };
    },
  },
};

export default resolvers;
