import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ordenes from "./pages/Ordenes";
import Menu from "./pages/Menu";
import NuevoPlato from "./pages/NuevoPlato";
import Sidebar from "./ui/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="md:flex min-h-screen">
        <Sidebar />
        <div className="md:w-3/5 xl:w-4/5 sm:min-h-screen p-6">
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nuevo-plato" element={<NuevoPlato />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
