const {Prisma} = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "https://eu1.prisma.sh/thomas-tognacci/sick-fits/dev",
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
