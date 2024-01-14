import React from 'react'

function Quiz() {
  return (
    <div className='w-screen h-screen flex flex-col items-center p-10'>
        <div className='h-fit flex gap-10 items-center m-40'>
          <div className='h-12 w-12 bg-black text-white rounded-full text-2xl flex justify-center items-center'>1</div>
          <span className='text-2xl'>What was the name of the </span>
        </div>

        <div>
          <div>
            <div className='h-12 w-12 bg-black text-white rounded-full text-2xl flex justify-center items-center'>A</div>

          </div>
          <div>
            <div className='h-12 w-12 bg-black text-white rounded-full text-2xl flex justify-center items-center'>B</div>

          </div>
        </div>
    </div>
  )
}

export default Quiz