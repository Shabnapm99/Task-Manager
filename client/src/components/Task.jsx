import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddTask from './AddTask';

function Task({ task, setTasks, setIsUpdating, setCurrentTask, setShowModal }) {
    let navigate = useNavigate();

    // edit task

    async function editTask(id) {
        setIsUpdating(true);
        setShowModal(true);//opens Modal in myTask
        setCurrentTask(task); // send task which has to be updated to MyTask

    }
    // delete task
    async function deleteTask(id) {
        try {
            let response = await axiosInstance.delete(`/tasks/${id}`);
            if (response.status === 200) {
                console.log("Task deleted successfully");
                setTasks((prev) => prev.filter((task) => task._id !== id))//to immediately reflect the delete in froontend use prev.
            }

        } catch (error) {
            console.log(error.message)
        }
    }
    return (

               <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 transition-transform hover:scale-105 hover:shadow-xl
            w-full max-w-md mx-auto">
            
            {/* Task Info */}
            <div className="flex-1 w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{task.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-3">{task.description}</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium'>{task.priority}</span>
                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>{task.status}</span>
                    <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'>{task.category}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-2 md:mt-0">
                <FaEdit
                    className='text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors'
                    onClick={editTask}
                    title="Edit Task"
                />
                <MdDelete
                    className='text-red-600 cursor-pointer hover:text-red-800 transition-colors'
                    onClick={() => deleteTask(task._id)}
                    title="Delete Task"
                />
            </div>
        </div>

    )
}

export default Task