import './App.css';
import React from 'react';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import UpdateProduct from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/:id/edit" element={<UpdateProduct/>} />
            </Routes>
        </div>
    );
}

export default App;
