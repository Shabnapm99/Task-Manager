// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// function Home() {
//     let isLoggedin = useSelector((state) => state.user.isLoggedin);
//     return (
//         <div className="max-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">

//             <div className="flex items-center justify-center min-h-screen px-4">
//                 <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-10 text-center">

//                     <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                         Organize Your Work. Simplify Your Life.
//                     </h2>

//                     <p className="text-gray-600 mb-8">
//                         Stay focused, manage your daily tasks efficiently, and boost your productivity with our powerful and easy-to-use Task Management App.
//                     </p>

//                     {!isLoggedin && <div className="flex justify-center gap-4">
//                         <Link
//                             to="/login"
//                             className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//                         >
//                             Login
//                         </Link>

//                         <Link
//                             to="/register"
//                             className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
//                         >
//                             Sign Up
//                         </Link>
//                     </div>}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home



import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
    let isLoggedin = useSelector((state) => state.user.isLoggedin);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section with Blue-Green Gradient Accent */}
            <div className="relative overflow-hidden bg-linear-to-br from-blue-600 via-emerald-500 to-teal-400 py-24 px-6 lg:py-32">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Organize Your Work. <br />
                        <span className="text-blue-100">Simplify Your Life.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Stay focused, manage your daily tasks efficiently, and boost your productivity with our powerful and easy-to-use Task Management App.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {!isLoggedin ? (
                            <>
                                <Link
                                    to="/login"
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-blue-700/30 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <Link
                                to="/tasks"
                                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                Go to Dashboard
                            </Link>
                        )}
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Feature Teasers */}
            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        // { title: "Smart Scheduling", desc: "Automate your priorities with AI-driven insights.", icon: "📅" },
                        // { title: "Team Sync", desc: "Collaborate in real-time with your squad effortlessly.", icon: "🚀" },
                        // { title: "Cloud Security", desc: "Your data is encrypted and stored in ultra-secure vaults.", icon: "🔒" }
                        {
                            title: "User Authentication",
                            desc: "Secure login ensures only registered users can create and manage their tasks.",
                            icon: "🔐"
                        },
                        {
                            title: "Private Task Management",
                            desc: "Each user can view and manage only their own tasks, ensuring complete privacy.",
                            icon: "📝"
                        },
                        {
                            title: "Task Creation & Tracking",
                            desc: "Easily add, update, and track your daily tasks in one organized place.",
                            icon: "✅"
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transform hover:scale-105 transition-transform">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;