import { getAllPlayers } from './dynamodb.connector.js';

const resolvers = {
  RootQuery: {
    players() {
      return getAllPlayers( 'FandualWeekNine' )
        .then((players) => ( players ))
        .catch((err) => { throw err });
    },
  },
};

export default resolvers;
