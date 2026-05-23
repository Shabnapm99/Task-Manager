
import React, { useEffect, useState } from 'react'
import Task from '../components/Task'
import AddTask from '../components/AddTask';
import axiosInstance from '../api/axios';

function MyTask() {
    const [showAddModal, setShowModal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

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
        /* Main Container with subtle slate background matching Home/Login */
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 md:px-10 overflow-hidden relative">
            
            {/* Background Accent Blur */}
            <div className="absolute top-0 right-0 w-75 h-75 bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-75 h-75 bg-emerald-100/50 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                            My Workspace
                        </h1>
                        <p className="text-slate-500 font-medium">
                            You have <span className="text-blue-600 font-bold">{tasks.length}</span> active tasks today.
                        </p>
                    </div>

                    <button 
                        type="button" 
                        className="group relative flex items-center justify-center gap-2 bg-slate-900 text-white py-3 px-8 rounded-2xl font-bold transition-all active:scale-95 shadow-xl shadow-slate-900/10 overflow-hidden"
                        onClick={() => setShowModal(true)}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="text-xl">+</span> Add New Task
                        </span>
                        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Tasks Grid */}
                {tasks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map((task) => (
                            <div 
                                className="group bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-2 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-1" 
                                key={task._id}
                            >
                                <Task 
                                    key={task._id} 
                                    task={task} 
                                    setTasks={setTasks} 
                                    setIsUpdating={setIsUpdating} 
                                    isUpdating={isUpdating} 
                                    setCurrentTask={setCurrentTask} 
                                    setShowModal={setShowModal} 
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center py-20 bg-white/40 backdrop-blur-md border border-dashed border-slate-300 rounded-[3rem]">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-4">
                            ✨
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Clear as a whistle!</h3>
                        <p className="text-slate-500">Click the button above to start your first task.</p>
                    </div>
                )}
            </div>

            {/* Modal Overlay Logic */}
            {showAddModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-300">
                    <AddTask 
                        onClose={() => {
                            setShowModal(false);
                            setIsUpdating(false);
                            setCurrentTask(null);
                        }} 
                        isUpdating={isUpdating} 
                        setTasks={setTasks}
                        taskData={currentTask} 
                    />
                </div>
            )}
        </div>
    )
}

export default MyTask;