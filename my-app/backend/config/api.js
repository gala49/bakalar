module.exports = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 20,
      maxLimit: 30,
    }
  }
};
