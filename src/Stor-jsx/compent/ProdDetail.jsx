// src/Stor-jsx/compent/ProdDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProdDetail.css';

const ProdDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/shoes.json'); // Path to your local JSON file
        const data = await response.json();
        setProducts(data);
        // Find the product with the matching ID
        const selectedProduct = data.find(item => item.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="prod-detail-container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="image" />
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)} className="button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProdDetail;
