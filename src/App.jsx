import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ListProd from './components/ListProd';
import ProdDetail from './components/ProdDetail';
import Cartlist from './components/cartlist';
import Navbar from './components/Navbar';
import FormComponent from './components/FormComponent';

const App = () => {
  const [cart, setCart] = useState([]);
  const [formCompleted, setFormCompleted] = useState(false); // Track form completion

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(product => product.id !== productId));
  };

  const cartCount = cart.length; // Define cartCount based on cart length

  return (
    <Router>
      <Navbar cartCount={cartCount} formCompleted={formCompleted} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FormComponent onComplete={() => setFormCompleted(true)} />} />
        <Route path="/listProd" element={<ListProd addToCart={addToCart} />} />
        <Route path="/listProd/:id" element={<ProdDetail addToCart={addToCart} />} />
        <Route path="/cartlist" element={<Cartlist cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
