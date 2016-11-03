const resolvers = {
  RootQuery: {
    post() {
      return { name: 'Successful Query' };
    },
  },
};

export default resolvers;
