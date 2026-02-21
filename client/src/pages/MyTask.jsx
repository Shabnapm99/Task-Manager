import React, { useState } from 'react'
import Task from '../components/Task'
import AddTask from '../components/AddTask';

function MyTask() {
    const [showAddModal, setShowModal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    return (
        <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-20 flex flex-col justify-center items-center gap-2">
            <div className='w-full'>
                <button type="button" className=" text-indigo-500 bg-white py-2 px-5 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition duration-200"
                    onClick={() => setShowModal(true)}>Add Task</button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center w-full'>
                <Task />
            </div>
            {showAddModal && <AddTask onClose={() => setShowModal(false) } isUpdating={isUpdating} />}
            

        </div>

    )
}

export default MyTask