import React from 'react'
import { ImCross } from "react-icons/im";


function TaskItem() {
  return (
    <div className='h-full w-full fixed bg-[#101622]/80 flex justify-center z-100 inset-y-0.5  '>
      <div className="bg-white  shadow-2xl rounded-2xl w-full max-w-md p-8 overflow-y-auto">
        <div className='bg-indigo-500 text-white  p-2 mb-2 w-fit rounded hover:text-indigo-950'>
          <ImCross onClick={onClose} />
        </div>
        <div className='flex justify-end gap-3'>
          <button className='px-1 border rounded text-indigo-500 bg-white'>Edit</button>
          <button className='px-1 border rounded bg-red-500 text-white'>Delete</button>
        </div>
        <h2>Title</h2>
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
    </div>
  )
}

export default TaskItem