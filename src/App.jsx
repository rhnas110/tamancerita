import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/home";
import { Aboutpage } from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/search" element={<h1>Search page</h1>} />
      <Route path="/detail/:id" element={<h1>Detail page</h1>} />
    </Routes>
  );
}

export default App;
