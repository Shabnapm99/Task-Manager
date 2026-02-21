import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-indigo-600">
                    Taskger
                </h1>

                {/* Links */}
                <div className="space-x-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-indigo-600">Home</Link>
                    <Link to="/login" className="hover:text-indigo-600">Login</Link>
                    {/* <Link to="" className="hover:text-indigo-600">Tasks</Link> */}
                    {/* <Link to="/mynotes" className="hover:text-indigo-600">Notes</Link> */}
                    <Link
                        to="/register"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar