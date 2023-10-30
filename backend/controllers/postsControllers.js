import Posts from "../model/posts.js";
// import {v2 as Cloudinary} from 'cloudinary';
import cloudinary from "../utils/cloudinary.js";

const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    console.log("req.files ======",req.files);
    console.log(req.body, "req,boydddy");
    
    // req.files.forEach((file) => {
    //     cloudinary.uploader.upload_stream(
    //       { resource_type: 'auto' },
    //       (result) => {
    //         console.log(result);
    //       }
    //     ).end(file.buffer);
    //   });


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


    console.log("resilutttt", result);

    const post = new Posts({
      caption: caption,
      // userId: userId,
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
