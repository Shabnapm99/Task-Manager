import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
    let isLoggedin = useSelector((state) => state.user.isLoggedin);
    return (
        <div className="max-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">

            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-10 text-center">

                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Organize Your Work. Simplify Your Life.
                    </h2>

                    <p className="text-gray-600 mb-8">
                        Stay focused, manage your daily tasks efficiently, and boost your productivity with our powerful and easy-to-use Task Management App.
                    </p>

                    {!isLoggedin && <div className="flex justify-center gap-4">
                        <Link
                            to="/login"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/sign-up"
                            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
                        >
                            Sign Up
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Home