import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-white overflow-y-auto">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;