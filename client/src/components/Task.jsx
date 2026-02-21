import React, { useState } from 'react'

function Task() {
    return (
       
        <div className="bg-white rounded-2xl shadow-xl w-full p-6" >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Title</h2>
            <div className='flex gap-5 font-medium text-indigo-700'>
                <div className='border-2 px-1 rounded-2xl'>priority</div>
                <div className='border-2 px-1 rounded-2xl'>status</div>
            </div>
            <div className='pt-2'>category:general </div>
            <p className="text-gray-600 m-3">
                description
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nostrum ut quo voluptatem atque aut consectetur ipsum illum excepturi! Accusantium labore veritatis sequi nesciunt eum id, nisi quisquam vel deleniti.
            </p>
            
        </div>
        

    )
}

export default Task