import React from 'react'; 
import { useCart } from '../context/CartContext'; 
import styles from '../styles/Cart.module.css'; 
 
const Cart = () => { 
  const { cart, dispatch } = useCart(); 
 
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); 
 
  const handleQuantityChange = (id, quantity) => { 
    if (quantity > 0) { 
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }); 
    } else { 
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } }); 
    } 
  }; 
 
  return ( 
    <div className={styles.cart}> 
      <h2>Cart</h2> 
      {cart.length === 0 ? ( 
        <p>Your cart is empty.</p> 
      ) : ( 
        <> 
          {cart.map(item => ( 
            <div key={item.id} className={styles.cartItem}> 
              <p>{item.title}</p> 
              <p>${item.price.toFixed(2)} x {item.quantity}</p> 
              <div> 
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button> 
                <span>{item.quantity}</span> 
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button> 
              </div> 
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p> 
            </div> 
          ))} 
          <h3>Total: ${totalAmount.toFixed(2)}</h3> 
          <button>Checkout</button> 
        </> 
      )} 
    </div> 
  ); 
}; 
 
export default Cart;
