import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState('');
    const [email,setEmail] = useState('');

     const handleLogin = async()=>{

     }
  return (
   <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
               onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full bg-indigo-500 text-white py-2 rounded-xl font-semibold hover:bg-indigo-600 transition duration-200 cursor-pointer"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to={'/register'} className="text-indigo-500 font-medium hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login