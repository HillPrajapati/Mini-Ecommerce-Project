import React from 'react'; 
import { useCart } from '../context/CartContext'; 
import styles from '../styles/ProductCard.module.css'; 
 
const ProductCard = ({ product }) => { 
  const { dispatch } = useCart(); 
 
  return ( 
    <div className={styles.card}> 
      <img src={product.image} alt={product.title} /> 
      <h3>{product.title}</h3> 
      <p>${product.price.toFixed(2)}</p> 
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}> 
        Add to Cart 
      </button> 
    </div> 
  ); 
}; 
 
export default ProductCard;
