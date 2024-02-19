import { Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import About from "./components/About";
import N404 from "./components/NotFound";
import EventDetails from "./components/EventDetails";

function App() {
  
  return (
   
    <Routes>
      <Route path="/about/:username" element={<About />} />
      <Route path="/" element={<Events />} />
  <Route path="/events/:id" element={<EventDetails />} />
      <Route path="" element={<N404/>} />
    </Routes>
  );
}

export default App;
