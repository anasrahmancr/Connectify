import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="app">
      <ToastContainer/>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path='/forgot-password' element = {<ForgotPassword/>}/>
            <Route path='/chat' element = {<Chat/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
