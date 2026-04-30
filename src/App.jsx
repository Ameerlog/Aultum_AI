import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Register from "./components/Register";
import ScrollToTop from "./components/ScrolltoTop";
import About from "./pages/About";
import UniqueProducts from "./components/UniqueProducts";
import FounderNote from "./pages/FounderNote";
import Culture from "./pages/Culture";
import Careers from "./pages/Careers";
import Investors from "./pages/Investors";
import Impact from "./pages/Impact";
// import BrandResources from "./pages/BrandResources";
import Contact from "./pages/Contact";
import CoBrother from "./pages/CoBrother";
import GrayMaterial from "./pages/GrayMaterial";

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
           <Route path="/culture" element={<Culture />} />
           <Route path="/careers" element={<Careers />} />
           <Route path="/investors" element={<Investors />} />
           <Route path="/impact" element={<Impact />} />
           {/* <Route path="/brand-resources" element={<BrandResources />} /> */}
           <Route path="/contact" element={<Contact />} />
           <Route path="/cobrother" element={<CoBrother />} />
           <Route path="/gray-material" element={<GrayMaterial />} />

        
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
