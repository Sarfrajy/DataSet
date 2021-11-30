const { gql } = require("apollo-server-express");
//Queries
const typeDefs = gql`
  type Post {
    id: ID
    name: String
    email: String
    phone:String
    dob:String
    image:String
  }
  type Query {
    hello: String
    getAll: [Post]
  }
  input PostInput {
    name: String
    email: String
    phone:String
    dob:String
    image:String
  }
  type Mutation {
    getPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): String
  }
`;

module.exports = typeDefs;
