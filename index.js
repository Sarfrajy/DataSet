const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./model/typeDefs");
const resolvers = require("./model/resolvers");

//Database Connection
const URL =
  "mongodb+srv://vicky:123RE@cluster0.hocgh.mongodb.net/CheckDB?retryWrites=true&w=majority";

mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("DB CONNECTED")
);

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(1550, () => console.log("Server UP & Running *1550"));
};
startServer();