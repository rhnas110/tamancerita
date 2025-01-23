import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<h1>Search page</h1>} />
      <Route path="/detail/:id" element={<h1>Detail page</h1>} />
    </Routes>
  );
}

export default App;
