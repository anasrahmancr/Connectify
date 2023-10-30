import React from "react";
import { Link } from "react-router-dom";
import '../homeCss/SideBar.css';

const SideBar = () => {
  return (
    <div className="sidenav">
        <h2 className="font-semibold text-xl">Connectify</h2>
      <Link to="/home">Home</Link>
      <Link to="/create-post">Create</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/messages">Messages</Link>
      <h4>Logout</h4>
    </div>
  );
};

export default SideBar;
