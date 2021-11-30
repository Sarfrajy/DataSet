const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone:String,
    dob:String,
    image:String
});
const Post = mongoose.model("post", PostSchema);
console.log(Post)
module.exports = Post;