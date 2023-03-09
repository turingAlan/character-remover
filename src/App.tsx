import "./styles/App.css";

import Layout from "./pages/Layout";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputScreen from "./pages/InputScreen";
import RemoveDuplicates from "./pages/RemoveDuplicates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InputScreen />} />

          <Route path="removeDuplicates" element={<RemoveDuplicates />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<WronPath />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
