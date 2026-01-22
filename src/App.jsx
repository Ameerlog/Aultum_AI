

import Navbar from  "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Footer from "./components/Footer"
function App() {
  return (
   <div className="min-h-screen bg-white overflow-x-hidden">
    <Navbar/> 
    <Dashboard/>
    <Footer/>
   </div>
  )
}

export default App
