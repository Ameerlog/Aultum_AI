import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Register from "./components/Register";
import ScrollToTop from "./components/ScrolltoTop";
import About from "./pages/About";
import UniqueProducts from "./components/UniqueProducts";
import FounderNote from "./pages/FounderNote";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
        <Navbar />

        <main >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/aboutUs" element={<About/>}/>
           <Route path="/unique" element={<UniqueProducts />} />
           <Route path="/founder-note" element={<FounderNote />} />

        
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
