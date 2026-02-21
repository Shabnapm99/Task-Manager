import React, { useState } from 'react'
import { ImCross } from "react-icons/im";

function AddTask({onClose,isUpdating}) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(){

    }

    return (
        <div className='h-full w-full fixed bg-[#101622]/80 flex justify-center z-100 inset-y-0.5 '>
            <div className="bg-white  shadow-2xl rounded-2xl w-full max-w-md p-8 overflow-y-auto">
                <div className='bg-indigo-500 text-white  p-2 mb-2 w-fit rounded hover:text-indigo-950'>
                    <ImCross onClick={onClose} />

                </div>
                <div className="text-center mb-8">
                    {/* <h2 class="text-2xl font-bold tracking-tight text-white">CRM Suite</h2> */}
                    <h1 className="text-3xl font-bold text-gray-800">
                        {isUpdating ? <span>Update Customer</span> : <span>Add a customer</span>}</h1>
                    <p className="text-gray-500 mt-2 text-sm">
                        Start managing your customers more efficiently today
                    </p>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/*Title*/}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Title of task"
                            value={title}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transitiontext-sm"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* category */}

                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            category
                        </label>
                        <input
                            type="text"
                            placeholder="General"
                            value={category}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition text-sm"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    {/* priority */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            priority
                        </label>
                        <input
                            type="text"
                            placeholder="Low, Medium, High"
                            value={priority}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition text-sm"
                            onChange={(e) => setPriority(e.target.value)}
                        />
                    </div>

                    {/* status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Status
                        </label>
                        <input
                            type="text"
                            placeholder="To Do, In Progress, Completed"
                            value={status}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition text-sm"
                            onChange={(e) => setStatus(e.target.value)}
                        />

                    </div>
                    {/* description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Description
                        </label>
                        <textarea
                            placeholder="Description"
                            value={description}
                            minLength={10}
                            maxLength={500}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition text-sm"
                            onChange={(e) => setDescription(e.target.value)}></textarea>

                    </div>


                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-xl font-semibold hover:bg-indigo-600 transition duration-200 cursor-pointer"
                        
                    >
                        {
                            isUpdating ? <span>Save changes</span> : <span>Add Customer</span>
                        }

                    </button>
                </form>
            </div >
        </div >
    )
}

export default AddTask