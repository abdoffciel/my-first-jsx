import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Stor-jsx/compent/Home';
import ListProd from './Stor-jsx/compent/ListProd';
import ProdDetail from './Stor-jsx/compent/ProdDetail';
import Cartlist from './Stor-jsx/compent/Cartlist';
import Navbar from './Stor-jsx/compent/Navbar';
import FormComponent from './Stor-jsx/compent/form';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(product => product.id !== productId));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FormComponent />} />
        <Route path="/listProd" element={<ListProd addToCart={addToCart} />} />
        <Route path="/listProd/:id" element={<ProdDetail addToCart={addToCart} />} />
        <Route path="/cartlist" element={<Cartlist cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
