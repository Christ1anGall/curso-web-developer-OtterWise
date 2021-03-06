
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./routes/Home";
import Posts from "./routes/Posts";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Posts />} />
      <Route path="*" element={<p>RoTA não Encontrada. 404</p>} />
      
    </Routes>
  )
}

export default App;
