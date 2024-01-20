import Quiz from "../components/Quiz"

function QuizWeb() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">

        <Quiz/>
        <div className="flex justify-between w-1/3 mt-20">
        
        <button className="py-2 px-5 active:scale-90 rounded tracking-wider text-2xl bg-red-500 hover:bg-red-600 outline-none border-none cursor-pointer">End</button>
        <button className={`py-2 px-5 active:scale-90 rounded tracking-wider text-2xl bg-sky-500 hover:bg-sky-600 outline-none border-none cursor-pointer`}>Next</button>
        </div>
    </div>
  )
}

export default QuizWeb