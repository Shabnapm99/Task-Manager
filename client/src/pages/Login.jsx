
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { useDispatch } from 'react-redux';
import {setIsLoggedin,setAuthUser} from '../features/userSlice.js'

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axiosInstance.post('/auth/login', { email, password });
      if (response.status === 200) {
        localStorage.setItem("securedToken", response.data.token);
        dispatch(setIsLoggedin(true));
        dispatch(setAuthUser(response.data.user))
        navigate('/tasks')
      }
    } catch (error) {
      console.log(error.message);
      setShowError(true);
    }
  }

  return (
    /* Background matching Home.jsx with Blue-Green Mesh Gradients */
    <div className="relative flex items-center justify-center min-h-screen bg-slate-50 px-4 overflow-hidden">
      
      {/* Decorative Mesh Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse delay-700"></div>

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 md:p-12">
          
          {/* Logo / Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-linear-to-br from-blue-600 to-emerald-500 shadow-lg shadow-blue-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8-0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
            <p className="text-slate-500 mt-2 font-medium">Log in to your Taskger account</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 shadow-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 shadow-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {showError && (
              <div className="bg-red-50 text-red-500 text-xs py-2 px-4 rounded-lg border border-red-100 text-center animate-shake">
                Invalid email or password. Please try again.
              </div>
            )}

            {/* Submit Button with Blue-Green Gradient hover */}
            <button
              type="submit"
              className="w-full group relative flex items-center justify-center bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all active:scale-[0.98] cursor-pointer shadow-xl shadow-slate-900/10"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200/60"></div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Or</span>
            <div className="h-px flex-1 bg-slate-200/60"></div>
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm text-slate-500">
            Don’t have an account?{" "}
            <Link to={'/register'} className="text-blue-600 font-bold hover:text-emerald-600 transition-colors">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Login