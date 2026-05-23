import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axiosInstance from '../api/axios';

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