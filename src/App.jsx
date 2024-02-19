import { Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import About from "./components/About";
import N404 from "./components/NotFound";

function App() {
  
  return (
   
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="/about/:username" element={<About />} />
      
      <Route path="" element={<N404/>} />
    </Routes>
  );
}

export default App;
