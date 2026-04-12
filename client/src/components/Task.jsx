// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axiosInstance from '../api/axios';
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import AddTask from './AddTask';

// function Task({ task, setTasks, setIsUpdating, setCurrentTask, setShowModal }) {
//     let navigate = useNavigate();

//     // edit task

//     async function editTask(id) {
//         setIsUpdating(true);
//         setShowModal(true);//opens Modal in myTask
//         setCurrentTask(task); // send task which has to be updated to MyTask

//     }
//     // delete task
//     async function deleteTask(id) {
//         try {
//             let response = await axiosInstance.delete(`/tasks/${id}`);
//             if (response.status === 200) {
//                 console.log("Task deleted successfully");
//                 setTasks((prev) => prev.filter((task) => task._id !== id))//to immediately reflect the delete in froontend use prev.
//             }

//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     return (

//                <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 transition-transform hover:scale-105 hover:shadow-xl
//             w-full max-w-md mx-auto">
            
//             {/* Task Info */}
//             <div className="flex-1 w-full">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{task.title}</h2>
//                 <p className="text-gray-600 mb-2 line-clamp-3">{task.description}</p>
//                 <div className='flex flex-wrap gap-2 mt-2'>
//                     <span className='bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium'>{task.priority}</span>
//                     <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>{task.status}</span>
//                     <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'>{task.category}</span>
//                 </div>
//             </div>

//             {/* Actions */}
//             <div className="flex gap-4 mt-2 md:mt-0">
//                 <FaEdit
//                     className='text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors'
//                     onClick={editTask}
//                     title="Edit Task"
//                 />
//                 <MdDelete
//                     className='text-red-600 cursor-pointer hover:text-red-800 transition-colors'
//                     onClick={() => deleteTask(task._id)}
//                     title="Delete Task"
//                 />
//             </div>
//         </div>

//     )
// }

// export default Task


import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Task({ task, setTasks, setIsUpdating, setCurrentTask, setShowModal }) {

    async function editTask() {
        setIsUpdating(true);
        setCurrentTask(task);
        setShowModal(true);
    }

    async function deleteTask(id) {
        if (!window.confirm("Delete this task?")) return;
        try {
            let response = await axiosInstance.delete(`/tasks/${id}`);
            if (response.status === 200) {
                setTasks((prev) => prev.filter((t) => t._id !== id))
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    // Dynamic color helper
    const getStatusStyles = (status) => {
        switch(status) {
            case 'Completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    }

    return (
        <div className="bg-white rounded-3xl p-6 flex flex-col h-full border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-100">
            
            {/* Top Bar: Category & Actions */}
            <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                    {task.category || "General"}
                </span>
                <div className="flex gap-1">
                    <button onClick={editTask} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                        <FaEdit size={18} />
                    </button>
                    <button onClick={() => deleteTask(task._id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                        <MdDelete size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h2 className="text-xl font-black text-slate-900 mb-2 leading-tight">
                    {task.title}
                </h2>
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2 mb-4">
                    {task.description}
                </p>
            </div>

            {/* Footer: Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-50">
                <div className={`px-4 py-1.5 rounded-full text-[11px] font-bold border ${getStatusStyles(task.status)}`}>
                    {task.status}
                </div>
                <div className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-slate-900 text-white shadow-lg shadow-slate-900/10">
                    {task.priority}
                </div>
            </div>
        </div>
    )
}

export default Task;