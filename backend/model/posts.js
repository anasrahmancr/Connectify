import { Schema, model, mongoose } from "mongoose";

const postSchema = new Schema({

  caption: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: { type: Array },
  comments: {type: Array},
  likes: {type: Number},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Posts = model("Posts", postSchema);
export default Posts;
