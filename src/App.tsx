import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start"
import Protected from "./components/Protected"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Protected Component={Start}/>}/>
    </Routes>
  )
}

export default App
