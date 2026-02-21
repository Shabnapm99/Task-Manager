import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Task({ task }) {
    let navigate = useNavigate();
    return (

        <div className="bg-white rounded-2xl shadow-xl w-full p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h2>
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