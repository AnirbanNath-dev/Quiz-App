
import logo from '../assets/gold-cup-in-hands-hand-holding-winner-trophy-vector-25863729-removebg-preview.png'
import Button from '../components/Button'

function Victory({ name } : { name: string}) {

  const handleClick = () =>{

  }


  return (
    <div className='w-screen p-10 flex justify-center items-center'>
    <div className='w-fit flex items-center p-10 flex-col gap-16'>
      <img src={logo} alt="Quiz logo" className='h-64'/>
      <span className='text-3xl tracking-wider '>🥳 {name} won the quiz 🥳</span>
      <Button clickEvent={handleClick} text='Play Again'/>

    </div>
    </div>

  )
}

export default Victory