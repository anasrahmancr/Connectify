import React from 'react'

const Buttons = ({likesCount}) => {
  return (
    <div className="likes-and-buttons">
    <div className="likes-count">{likesCount}, 7</div>
    <div className="action-buttons">
      <button className="like-button">Like</button>
      <button className="comment-button">Comment</button>
      <button className="share-button">Share</button>
    </div>
  </div>
  )
}

export default Buttons
