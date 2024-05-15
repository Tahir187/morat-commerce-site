import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TrendingPage from "./components/TrendingPage"
import MenPage from "./pages/MenPage"
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <TrendingPage />
      <MenPage />
    </BrowserRouter>
    </>
  )
}

export default App
