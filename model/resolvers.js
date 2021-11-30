const Post = require("./Post");

//Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    getPost: async (parent, args, context, info) => {
      const { name, email, phone, dob, image } = args.post;
      const post = await new Post({ name, email, phone, dob, image }).save();
      return post;
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { name, email,phone,dob,image } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { name, email,phone,dob,image },
        { new: true }
      );
      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
