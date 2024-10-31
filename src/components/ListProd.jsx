
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ListProd.css';

const ListProd = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const location = useLocation(); 
  const { name, lastName } = location.state || {};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5002/shoes');
        const data = await response.json();
        setProducts(data);
        
        // Extract unique categories
        const categoryList = [...new Set(data.map((product) => product.category))];
        setCategories(categoryList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="list-prod-container">
      <h2>Product List</h2>
      {name && lastName && (
        <div>
          <p className="welcome">Welcome {name} {lastName}</p>
        </div>
      )}
      <div className="filter">
        <label htmlFor="category-select">Filter by category:</label>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/listProd/${product.id}`} className="link">
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} className="image" />
              <p>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)} className="button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProd;
