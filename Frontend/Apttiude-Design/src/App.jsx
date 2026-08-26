import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/DashBoard";
import Quantative from "./pages/Quantative";
import English from "./pages/English";
import Solver from "./pages/Solver";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route
          path="/quantitative"
          element={<Quantative />}
        />

        <Route
          path="/english"
          element={<English />}
        />

        <Route
          path="/solver"
          element={<Solver />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;