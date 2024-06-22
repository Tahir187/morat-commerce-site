import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenPage from "./pages/MenPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* <MenPage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
