import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/userLogin",
        {email, password}, {withCredentials: true}
      );
      if(response.data.success) {
        console.log(response.data,"response.data in login");
        navigate("/home")
        toast.success("Logged in successfully", {
          position: " top-center",
          autoClose: 1000, 
        });
        
      } 
      
    } catch (error) {
      toast.error("Internal Error", {
        position: "top-center",
        autoClose: 3000,
      });
    }



  };

  return (
    <div className="flex min-h-full w-96 ml-96  flex-col justify-center px-6 py-12 lg:px-8 bg-gray-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-white">
          Connectify Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
          {error && (
            <div className="text-center text-2xl text-red-500">{error}</div>
          )}
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
                className="block font-sans text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="text-sm flex justify-end">
                <a
                  href="#"
                  className="font-semibold text-white hover:text-white"
                >
                <Link to='/forgot-password'>Forgot Password</Link>
                 
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>

          

        </form>

        <p className="mt-10 text-center text-sm text-white">
          Not having an account? 
          <a
            href="#"
            className="font-semibold leading-6 text-white hover:text-white"
          >
            <Link to="/register">Sign up</Link> 
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;