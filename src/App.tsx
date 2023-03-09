import "./styles/App.css";

import { Routes, Route } from "react-router-dom";
import InputScreen from "./pages/InputScreen";
import RemoveDuplicates from "./pages/RemoveDuplicates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InputScreen />} />
      <Route path="/removeDuplicates" element={<RemoveDuplicates />} />
    </Routes>
  );
}

export default App;
