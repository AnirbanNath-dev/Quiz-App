import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start"
import Protected from "./components/Protected"
import Quiz from "./components/Quiz"
import Victory from "./pages/Victory"
import QuizWeb from "./pages/QuizWeb"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/quiz" element={<Protected Component={QuizWeb}/>}/>
      
    </Routes>
  )
}

export default App
