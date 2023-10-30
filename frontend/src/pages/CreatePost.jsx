import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreatePost() {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null); // Use null instead of an empty array

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image); // Use the name "image" to match your server code
    formData.append("caption", caption);

    try {
      const response = await axios.post("http://localhost:5000/api/posts/createPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if(response.data.success){
        toast.success("Post created successfully", {
          position: "top-center",
          autoClose: 1000, // Auto close after 3 seconds
        });
        console.log(response, "resp");
        navigate('/home')
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="postImage" className="text-lg font-medium">
            Upload Image
          </label>
          <input
            type="file"
            id="postImage"
            accept="image/*" // Allow only image files
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="postContent" className="text-lg font-medium">
            Post caption
          </label>
          <textarea
            id="postContent"
            className="w-full h-40 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="What's on your mind?"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
