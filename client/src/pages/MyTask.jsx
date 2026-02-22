import React, { useEffect, useState } from 'react'
import Task from '../components/Task'
import AddTask from '../components/AddTask';
import axiosInstance from '../api/axios';

function MyTask() {
    const [showAddModal, setShowModal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null); //

    //to get all tasks of user when logged in
    useEffect(() => {
        let getTasks = async () => {
            try {
                let response = await axiosInstance.get('/tasks');
                if (response.status === 200) {
                    setTasks(response.data.tasks)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getTasks()

    }, [])

    return (
        <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-10 flex flex-col items-center gap-2">
            <div className='w-full'>
                <button type="button" className=" text-indigo-500 bg-white py-2 px-5 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition duration-200"
                    onClick={() => setShowModal(true)}>Add Task</button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-6xl '>
                {
                    tasks.map((task) => {
                        return (
                            <div className="w-[90%] md:w-full mx-auto" key={task._id}>
                                <Task key={task._id} task={task} setTasks={setTasks} setIsUpdating={setIsUpdating} isUpdating={isUpdating} setCurrentTask={setCurrentTask} setShowModal={setShowModal} />
                            </div>)
                    })
                }

            </div>
            {showAddModal && <AddTask onClose={() => {
                setShowModal(false);
                setIsUpdating(false);
                setCurrentTask(null);
            }

            } isUpdating={isUpdating} setTasks={setTasks}
                taskData={currentTask} // pass the task being edited
            />}

        </div>

    )
}

export default MyTask