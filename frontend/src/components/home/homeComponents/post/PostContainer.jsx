import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios to make API requests
import Image from './Image';
import UserDP from './UserDP';
import Caption from './Caption';
import Buttons from './Buttons';
import Comment from './Comment';

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts/getPosts');
        if (response.data.success) {
          setPosts(response.data.posts);
          console.log(response.data.posts,"response.data.posts");
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 && (
        posts.map((post, index) => (
          <div className="post m-20" key={index} >
            <UserDP imageUrl={post.userDP} />
            <Image imageUrl={post.image} />
            <Caption caption={post.caption} />
            <Buttons likesCount={post.likesCount} />
            <Comment comments={post.comments} />
          </div>
        ))
      )}
    </div>
  );
}

export default PostContainer;
