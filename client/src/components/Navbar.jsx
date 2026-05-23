import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser, setIsLoggedin } from '../features/userSlice.js'
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons if you haven't

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let isLoggedin = useSelector((state) => state.user.isLoggedin);
    let user = useSelector((state) => state.user.authUser)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("securedToken");
        dispatch(setIsLoggedin(false));
        dispatch(setAuthUser(null));
        setIsMenuOpen(false);
        navigate('/login');
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 fixed top-0 z-50 transition-all">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group z-50">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-emerald-500 rounded-lg shadow-md group-hover:rotate-12 transition-transform"></div>
                    <h1 className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-600 tracking-tight">
                        Taskger
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 text-slate-600 font-semibold">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    
                    {!isLoggedin ? (
                        <>
                            <Link to="/login" className="hover:text-blue-600 transition-colors">Login</Link>
                            <Link
                                to="/register"
                                className="bg-linear-to-r from-blue-600 to-emerald-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all active:scale-95"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className='flex items-center gap-6'>
                            <Link to="/tasks" className="hover:text-blue-600 transition-colors">My Tasks</Link>
                            <div className='flex items-center gap-4 pl-6 border-l border-slate-200'>
                                <span className="text-slate-400 font-normal">Welcome, <span className="text-slate-900 font-bold">{user?.name}</span></span>
                                <button 
                                    className='bg-slate-100 text-slate-600 px-4 py-2 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all cursor-pointer font-bold border border-transparent hover:border-red-100'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button 
                        onClick={toggleMenu}
                        className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 flex flex-col p-8 pt-24 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col space-y-6 text-xl font-bold text-slate-800 bg-linear-to-r from-blue-600/90 to-emerald-600/90 p-2 rounded-2xl">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Home</Link>
                        
                        {!isLoggedin ? (
                            <>
                                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Login</Link>
                                <Link 
                                    to="/register" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="bg-linear-to-r from-blue-600 to-emerald-500 text-white text-center py-4 rounded-2xl shadow-lg shadow-blue-500/20"
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/tasks" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">My Tasks</Link>
                                <div className="pt-6 border-t border-slate-100">
                                    <p className="text-sm font-medium text-slate-400 mb-4">Logged in as {user?.name}</p>
                                    <button 
                                        className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-bold"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;