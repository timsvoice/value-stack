const resolvers = {
  Query: {
    post() {
      return { name: 'Successful Query' };
    },
  },
};

export default resolvers;
