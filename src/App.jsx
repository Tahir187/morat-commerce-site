import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
    </BrowserRouter>
    </>
  )
}

export default App
