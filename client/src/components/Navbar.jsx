import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser, setIsLoggedin } from '../features/userSlice.js'


function Navbar() {
    let isLoggedin = useSelector((state) => state.user.isLoggedin);
    let user = useSelector((state) => state.user.authUser)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-indigo-600">
                    Taskger
                </h1>

                {/* Links */}
                <div className="space-x-6 text-gray-700 font-medium flex items-center">
                    <Link to="/" className="hover:text-indigo-600">Home</Link>
                    {!isLoggedin ? <><Link to="/login" className="hover:text-indigo-600">Login</Link>
                        <Link
                            to="/register"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Sign Up
                        </Link>
                    </> :
                        <div className='flex justify-center items-center gap-2'>
                            <Link to="/tasks" className="hover:text-indigo-600">Tasks</Link>
                            <div
                                className="text-[#135bec] hover:text-white cursor-pointer hidden md:block"
                            >
                                Hi, {user?.name}
                            </div>
                            <div className='hover:text-[#135bec] cursor-pointer' onClick={() => {

                                localStorage.removeItem("securedToken");
                                dispatch(setIsLoggedin(false));
                                dispatch(setAuthUser(null));
                                navigate('/login')
                            }}>
                                Logout
                            </div>
                        </div>}



                </div>

            </div>
        </nav>
    )
}

export default Navbar