import { Routes, Route } from "react-router-dom";
import { Home, Reservation, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
