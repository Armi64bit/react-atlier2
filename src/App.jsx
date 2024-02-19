import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Suspense, lazy } from "react";

const N404 = lazy(() => import('./components/NotFound'));
const About = lazy(() => import('./components/About'));
const Events = lazy(() => import('./components/Events'));

const EventDetails = lazy(() => import('./components/EventDetails'));

function App() {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/about/:username" element={<About />} />
      <Route path="/" element={<Events />} />
  <Route path="/events/:name" element={<EventDetails />} />
      <Route path="" element={<N404/>} />
    </Routes>
    </Suspense>

  );
}

export default App;
