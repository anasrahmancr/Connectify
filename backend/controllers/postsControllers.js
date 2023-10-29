import Posts from "../model/posts.js";

const createPost = async(req, res) => {
    try{
        const {userId, caption, imageUrl} = req.body;
        const post = new Posts({
            caption: caption,
            userId: userId, 
            image: imageUrl,
            createdAt: Date.now(),
        })
        post.save();
    } catch(error){
        res.status(500).json({message: 'Internal Server Error'})
    }
};

const getPosts = async(req,res) => {
    try{
        const posts = await Posts.find();
        if(!posts){
           return res.status(409).json({success: false, message: "No posts available"});
        } 
        res.status(200).json({success: true, posts: posts});
    } catch(error) {
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export {createPost, getPosts};