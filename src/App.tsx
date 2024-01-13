import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start"
import Protected from "./components/Protected"
import Quiz from "./pages/Quiz"
import Victory from "./pages/Victory"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Victory name="Anirban"/>}/>
      <Route path="/quiz/:id" element={<Protected Component={Quiz}/>}/>
    </Routes>
  )
}

export default App
