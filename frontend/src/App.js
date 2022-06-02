import React from "react";
import { Routes, Route, HashRouter, } from "react-router-dom";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";
import Auth from "./pages/Auth";

function App() {
      return (
            <HashRouter>
                  <Routes>
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/hotels" element={<Hotels />} />
                        <Route path="/hotels/:id" element={<Hotel />} />
                  </Routes>
            </HashRouter>
      );
}

export default App;
