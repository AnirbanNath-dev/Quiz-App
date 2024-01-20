import React from 'react'


function Button({clickEvent , text} : {clickEvent : React.MouseEventHandler , text : string}) {
  return (
    <button 
    onClick={clickEvent} 
    className='border-2 border-black w-full py-3 px-5 text-2xl rounded-full bg-black text-white hover:text-black hover:bg-white transition-all duration-500 active:scale-90'>
    {text}
    </button>
  )
}

export default Button