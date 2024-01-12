import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start"
import Protected from "./components/Protected"
import Quiz from "./pages/Quiz"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/quiz/:id" element={<Protected Component={Quiz}/>}/>
    </Routes>
  )
}

export default App
