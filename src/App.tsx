import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import ItemList from "./components/Products/ItemList";
import Login from "./components/Login/Login";
import DataProvider from "./context/dataContext";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <DataProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<ItemList />} />
        </Routes>
      </Router>
      <Footer />
    </DataProvider>
  );
}

export default App;
