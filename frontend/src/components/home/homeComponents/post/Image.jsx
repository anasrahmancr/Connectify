import React, { useState } from 'react';
import '../../homeCss/Posts.css';

const Image = ({imageUrl}) => {
  return (
    <img src={imageUrl}  alt='post Image'/> 
  )
}

export default Image;





 
    // <div className="posts-container">
    //   {posts.map((post) => (
    //     <div key={post.id} className="post">
    //       <div className="user-profile">
    //         <img className="profile-image" src={post.profileImage} alt="dp" />
    //       </div>
    //       <div className="post-image">
    //         <img src={post.image} alt="image" />
    //       </div>
    //       <div className="post-icons">
    //         {/* Add content for post-icons here */}
    //       </div>
    //       <div className="likes">
    //         {/* Add content for likes here */}
    //       </div>
    //       <div className="caption">
    //         {post.caption}
    //       </div>
    //       <div className="comments">comments..</div>
    //     </div>
    //   ))}
    // </div>
