import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursorBubble from "./components/CursorBubble";
import Dashboard from "./pages/DashBoard";
import Quantative from "./pages/Quantative";
import English from "./pages/English";
import Solver from "./pages/Solver";
import EnglishTopic from "./pages/EnglishTopic";
import SolverAI from "./pages/SolverAI";

function App() {
  return (

    <BrowserRouter>
    <CursorBubble />
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
  path="/english/:slug"
  element={<EnglishTopic />}
/>

        <Route
          path="/solver"
          element={<Solver />}
        />

        <Route
          path="/solver-ai"
          element={<SolverAI />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;