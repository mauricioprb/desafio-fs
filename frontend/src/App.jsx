import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/global/reset.css";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/" element={<Produtos />} />
      </Routes>
    </Router>

  );
};

export default App;
