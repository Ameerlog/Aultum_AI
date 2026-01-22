import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
 <div className="min-h-screen w-full bg-white overflow-x-hidden">
{/* routing */}
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;