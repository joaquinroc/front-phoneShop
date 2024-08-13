import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import ItemList from "./components/Products/ItemList";
import DataProvider from "./context/dataContext";




function App() {
  return (
    <DataProvider> 
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<ItemList />} />
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
