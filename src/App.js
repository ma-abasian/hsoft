import "./App.css";
import DoctorList from "./pages/DoctorList";
import { Route, Routes } from "react-router-dom";
import DoctorDetail from "./pages/DoctorDetail";

function App() {
  return (
    <div className="relative px-3 bg-[#F4F8F8]">
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/detail/:id" element={<DoctorDetail />} />
      </Routes>
    </div>
  );
}

export default App;
