import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../api/axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddTask from './AddTask';

function Task({ task, setTasks, setIsUpdating, setCurrentTask ,setShowModal}) {
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

        <div className="bg-white rounded-2xl shadow-xl w-full p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h2>
            <FaEdit className='text-slate-400 cursor-pointer'
                onClick={() => { editTask(task) }} />

            <MdDelete className='text-red-400 cursor-pointer'
                onClick={() => deleteTask(task._id)} />
            <div className='flex gap-5 font-medium text-indigo-700'>
                <div className='border-2 px-1 rounded-2xl'>{task.priority}</div>
                <div className='border-2 px-1 rounded-2xl'>{task.status}</div>
            </div>
            <div className='pt-2'>category:{task.category} </div>
            <p className="text-gray-600 m-3">
                {task.description}</p>

        </div>


    )
}

export default Task