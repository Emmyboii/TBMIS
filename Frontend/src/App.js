import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ThankYou from "./Pages/ThankYou";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank_you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
