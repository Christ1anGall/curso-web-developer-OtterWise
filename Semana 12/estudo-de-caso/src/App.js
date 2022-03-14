import "./App.css";
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from "react-router-dom";
import CarCreate from "./routes/CarCreate.js";
import CarEdit from "./routes/CarEdit";
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/car" element={<CarCreate />} />
        <Route path="/car/edit/:id" element={<CarEdit />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
