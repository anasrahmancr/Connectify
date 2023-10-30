import React from 'react'

const StatusIcons = () => {
  return (
    <div className='pl-12'>
      <div className='flex flex-wrap'>
        {/* Status Icon 1 */}
        <div className='relative w-1/2'>
          <div className='w-20 h-20 rounded-full overflow-hidden border-4'>
            <img
              src='https://picsum.photos/200/300'
              alt='Profile 1'
              className='object-cover w-full h-full'
            />
          </div>
          <h5 className='text-black-500'>Full Name</h5>
          {/* <div className='absolute bg-white rounded-full w-6 h-6 bottom-0 right-0 border-2 border-blue-400'></div> */}
        </div>

        {/* Status Icon 2 (Repeat this structure for more icons) */}
        <div className='relative pl-1 w-1/2'>
          <div className=' w-20 h-20 rounded-full overflow-hidden border-4'>
            <img
              src='https://picsum.photos/200/300'
              alt='Profile 2'
              className='object-cover w-full h-full'
            />
          </div>
              <h5 className='text-black-500'>Full Name</h5>
        </div>
      </div>
    </div>
  )
}

export default StatusIcons
