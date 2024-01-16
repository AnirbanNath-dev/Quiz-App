
function Quiz() {
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <div className='h-fit flex gap-10 items-center my-40'>
        <div className='h-12 w-12 bg-black text-white rounded-full text-2xl flex justify-center items-center'>1</div>
        <span className='text-2xl'>What was the name of the </span>
      </div>

      <div className='flex flex-col gap-8 w-1/3'>
        <div className='flex justify-between'>

          <div className='flex items-center cursor-pointer gap-4'>
            <div className='h-10 w-10 bg-black text-white rounded-full text-2xl flex justify-center items-center'>A</div>
            <span className='text-2xl'>Anirban</span>
          </div>
          <div className='flex items-center cursor-pointer gap-4'>
            <div className='h-10 w-10 bg-black text-white rounded-full text-2xl flex justify-center items-center'>B</div>
            <span className='text-2xl'>Anirban</span>
          </div>

        </div>



        <div className='flex justify-between'>

          <div className='flex items-center cursor-pointer gap-4'>
            <div className='h-10 w-10 bg-black text-white rounded-full text-2xl flex justify-center items-center'>C</div>
            <span className='text-2xl'>Anirban</span>
          </div>
          <div className='flex items-center cursor-pointer gap-4'>
            <div className='h-10 w-10 bg-black text-white rounded-full text-2xl flex justify-center items-center'>D</div>
            <span className='text-2xl'>Anirban</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Quiz