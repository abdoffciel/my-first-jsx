import React, { useState } from 'react';
import './Cartlist.css';

const Cartlist = ({ cart, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPrice = cart.reduce((sum, product) => sum + parseFloat(product.price), 0); // Convert price to float

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmAction = () => {

    setIsModalOpen(false);
  };

  return (
    <div className="cartlist-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((product) => (
              <li key={product.id} className="item">
                <img src={product.image} alt={product.title} className="item-image" />
                <span className="item-title">{product.title}</span>
                <span className="item-price">${parseFloat(product.price).toFixed(2)}</span> {/* Convert price to float for display */}
                <button onClick={() => removeFromCart(product.id)} className="button">Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-container">
            <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
            <button className="confirm-button" onClick={handleConfirmClick}>
              ✔
            </button>
          </div>
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Are you sure?</h2>
                <p>Do you want to proceed with this action?</p>
                <div className="modal-actions">
                  <button className="modal-button" onClick={handleConfirmAction}>
                    Yes
                  </button> &nbsp;&nbsp;
                  <button className="modal-button" onClick={handleCloseModal}>
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cartlist;
