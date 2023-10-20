import React, { useState } from 'react';
import '../homePage/homeCss/Posts.css';

const Posts = () => {
  const [posts, setPost] = useState([
    {
      id: 1,
      profileImage: 'https://picsum.photos/200/300',
      image: 'https://picsum.photos/200/300',
      caption: 'This is a caption.',
    },
    {
      id: 2,
      profileImage: 'https://picsum.photos/200/300',
      image: 'https://picsum.photos/200/300',
      caption: 'This is another caption.',
    },
  ]);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="user-profile">
            <img className="profile-image" src={post.profileImage} alt="dp" />
          </div>
          <div className="post-image">
            <img src={post.image} alt="image" />
          </div>
          <div className="post-icons">
            {/* Add content for post-icons here */}
          </div>
          <div className="likes">
            {/* Add content for likes here */}
          </div>
          <div className="caption">
            {post.caption}
          </div>
          <div className="comments">comments..</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
