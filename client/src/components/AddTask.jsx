import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import axiosInstance from '../api/axios';

function AddTask({ onClose, isUpdating, setTasks, taskData }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isUpdating && taskData) {
            setTitle(taskData.title);
            setCategory(taskData.category);
            setPriority(taskData.priority);
            setStatus(taskData.status);
            setDescription(taskData.description);
        }
    }, [isUpdating, taskData]);

    async function handleSubmit(e) {
        e.preventDefault();
        const payload = { title, category, priority, status, description };

        try {
            setLoading(true);
            if (isUpdating && taskData) {
                let response = await axiosInstance.put(`/tasks/${taskData._id}`, payload);
                setTasks(prev => prev.map(t => t._id === taskData._id ? response.data.task : t));
            } else {
                // Validation logic
                if (!title.trim() || !category.trim() || !description.trim()) {
                    setErrorMessage("All fields are required");
                    setShowError(true);
                    return;
                }
                let response = await axiosInstance.post('/tasks', payload);
                setTasks((prev) => [...prev, response.data.task]);
            }
            onClose();
        } catch (error) {
            setShowError(true);
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        /* Frosted Glass Overlay */
        <div className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-100 p-4'>

            {/* Modal Container */}
            <div className="bg-white/90 backdrop-blur-2xl border border-white shadow-2xl rounded-[2.5rem] w-full max-w-lg p-8 md:p-10 relative overflow-hidden">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-6 right-6 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all'
                >
                    <ImCross size={14} />
                </button>

                <div className="mb-8">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        {isUpdating ? "Update Task" : "Create Task"}
                    </h1>
                    <p className="text-slate-500 mt-1 font-medium italic">
                        Organize your workflow in seconds.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Title</label>
                            <input
                                type="text"
                                placeholder="What needs to be done?"
                                value={title}
                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 outline-none transition-all"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Priority</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500/50"
                            >
                                <option value="">Select</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500/50"
                            >
                                <option value="">Select</option>
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Category</label>
                        <input
                            type="text"
                            placeholder="e.g. Work, Personal, Fitness"
                            value={category}
                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500/50"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Description</label>
                        <textarea
                            placeholder="Add some details..."
                            value={description}
                            rows="3"
                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500/50 resize-none"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    {showError && (
                        <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-500 text-xs font-bold flex items-center gap-2">
                            <span>⚠️</span> {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full group relative bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all active:scale-95 shadow-xl shadow-slate-900/10"
                        disabled={loading}>
                        <span className="relative z-10">{loading ? "Saving..." : isUpdating ? "Save Changes" : "Add Task"}</span>
                        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddTask;