import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TrendingPage from "./components/TrendingPage"
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <TrendingPage />
    </BrowserRouter>
    </>
  )
}

export default App
