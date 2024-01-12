import logo from '../assets/quiz-logo-in-comic-style-brainy-game-vector-36246215-removebg-preview.png'


function Start() {
  return (
    <div className='w-screen p-10 flex justify-center items-center'>
    <div className='w-fit flex items-center p-10 flex-col gap-10'>
      <img src={logo} alt="Quiz logo"/>
      <input type="text" className='border-2 border-black rounded-full py-3 px-5 tracking-tight text-2xl w-full' placeholder='Enter your name...'/>
      
      <select name="" id="" className='w-full text-2xl py-3 px-5 rounded-full border-2 border-black bg-transparent'>

        <option value="10">10 Questions</option>
        <option value="20">20 Questions</option>
        <option value="30">30 Questions</option>
      </select>

      <button className='border-2 border-black w-full py-3 px-5 text-2xl rounded-full bg-black text-white hover:text-black hover:bg-white transition-all duration-500 active:scale-90'>Join</button>
    </div>
    </div>
  )
}

export default Start