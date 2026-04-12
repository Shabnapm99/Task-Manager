// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axios';

// function RegisterPage() {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [showError, setShowError] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     let navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!name.trim()) {
//             setShowError(true);
//             setErrorMessage('Please provide a valid name');
//             return;
//         } else

//             if (!email.trim()) {
//                 setShowError(true);
//                 setErrorMessage('Please provide a valid email');
//                 return;
//             } else
//                 if (emailRegex.test(email) === false) {
//                     setShowError(true);
//                     setErrorMessage("Please provide proper email");
//                     return
//                 }
//                 else {
//                     try {
//                         let response = await axiosInstance.post('/auth/register', { name, email, password, username });

//                         if (response.status === 201) {
//                             console.log("user created successfully")
//                             setShowError(false);
//                             setName('');
//                             setEmail('');
//                             setUsername('');
//                             setPassword('');//clear the fields on success only
//                             navigate('/login')
//                         } else {
//                             setShowError(true);
//                             setErrorMessage(response.data.message);
//                         }


//                     } catch (error) {

//                         console.log("Error happened while posting the data", error.message);
//                         setShowError(true);
//                         setErrorMessage(error.message)
//                     }
//                 }
//     }
//     return (
//         <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-center min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
//             {/* Logo / Title */}
//             <div className="text-center mb-8">
//                 {/* <h2 class="text-2xl font-bold tracking-tight text-white">CRM Suite</h2> */}
//                 <h1 className="text-3xl font-bold text-black">Create your account</h1>
//                 <p className="text-gray-800 mt-2 text-sm">
//                     Start managing your tasks more efficiently today
//                 </p>
//             </div>

//             <div className="bg-white  shadow-2xl rounded-2xl w-full max-w-md p-8">



//                 {/* Form */}
//                 <form className="space-y-5" onSubmit={handleSubmit}>
//                     {/*Name*/}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-1">
//                             Full Name
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="John Doe"
//                             value={name}
//                             className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>

//                     {/* Username */}

//                     <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-1">
//                             Username
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             value={username}
//                             className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </div>


//                     {/* Email */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-1">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="you@example.com"
//                             value={email}
//                             className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>

//                     {/* Password */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-1">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="••••••••"
//                             value={password}
//                             className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//                             onChange={(e) => setPassword(e.target.value)}
//                         />

//                         {/* error paragraph */}
//                         {showError && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                             {errorMessage}
//                         </p>}
//                     </div>


//                     {/* Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-indigo-500 text-white py-2 rounded-xl font-semibold hover:bg-indigo-600 transition duration-200 cursor-pointer"

//                     >
//                         Sign Up
//                     </button>
//                 </form>

//                 {/* Divider */}
//                 <div className="my-6 flex items-center">
//                     <div className="flex-1 border-t"></div>
//                     <span className="px-3 text-gray-400 text-sm">OR</span>
//                     <div className="flex-1 border-t"></div>
//                 </div>


//                 {/* Signup */}
//                 <p className="text-center text-sm text-gray-500 mt-6">
//                     already have an account?{" "}
//                     <span className="text-indigo-500 font-medium hover:underline cursor-pointer" onClick={() => navigate('/login')}>
//                         Sign In
//                     </span>
//                 </p>

//             </div>
//         </div>
//     )
// }

// export default RegisterPage


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!name.trim()) {
            setShowError(true);
            setErrorMessage('Please provide a valid name');
            return;
        } 
        if (!email.trim() || !emailRegex.test(email)) {
            setShowError(true);
            setErrorMessage("Please provide a proper email address");
            return;
        }

        try {
            let response = await axiosInstance.post('/auth/register', { name, email, password, username });
            if (response.status === 201) {
                setShowError(false);
                setName('');
                setEmail('');
                setUsername('');
                setPassword('');
                navigate('/login')
            } else {
                setShowError(true);
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            setShowError(true);
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-slate-50 px-4 overflow-hidden pt-20">
            
            {/* Mesh Gradient Background (Matches Home/Login) */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-pulse delay-700"></div>

            <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
                
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-linear-to-br from-blue-600 to-emerald-500 shadow-lg shadow-blue-500/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Create Account</h1>
                    <p className="text-slate-500 mt-2 font-medium">Join Taskger and start organizing your life.</p>
                </div>

                {/* Glassmorphism Form Card */}
                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] w-full p-8 md:p-10">
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        
                        {/* Name */}
                        <div className="md:col-span-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                className="w-full px-5 py-3.5 bg-white/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 shadow-sm"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Username */}
                        <div className="md:col-span-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="johndoe123"
                                value={username}
                                className="w-full px-5 py-3.5 bg-white/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 shadow-sm"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                value={email}
                                className="w-full px-5 py-3.5 bg-white/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 shadow-sm"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                className="w-full px-5 py-3.5 bg-white/50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:outline-none transition-all duration-300 shadow-sm"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {showError && (
                                <p className="text-red-500 text-xs mt-3 flex items-center gap-1 font-semibold animate-pulse">
                                    <span className="text-lg">⚠</span> {errorMessage}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 pt-2">
                            <button
                                type="submit"
                                className="w-full group relative flex items-center justify-center bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all active:scale-[0.98] cursor-pointer shadow-xl shadow-slate-900/10"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </form>

                    {/* Footer Navigation */}
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="h-px w-full bg-slate-100"></div>
                        <p className="text-sm text-slate-500 font-medium">
                            Already have an account?{" "}
                            <button 
                                onClick={() => navigate('/login')} 
                                className="text-blue-600 font-bold hover:text-emerald-600 transition-colors cursor-pointer"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;