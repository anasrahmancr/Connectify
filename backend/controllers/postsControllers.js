import Posts from "../model/posts.js";
import cloudinary from "../utils/cloudinary.js";
import jwt from 'jsonwebtoken';

const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const key = process.env.JWT_SECRET;
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, key);
    const {user_id} = decodedToken;

    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        stream.write(fileBuffer);
        stream.end();
      });
    };
    const result = await streamUpload(req.files[0].buffer);

    const post = new Posts({
      caption: caption,
      userId: user_id,
      image: result.secure_url,
      createdAt: Date.now(),
    });
    await post.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    
    if (!posts) {
      return res
        .status(409)
        .json({ success: false, message: "No posts available" });
    }
    res.status(200).json({ success: true, posts: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { createPost, getPosts };
