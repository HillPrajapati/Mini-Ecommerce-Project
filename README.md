App.js file:-- 
 
import React from 'react'; 
import { CartProvider } from './context/CartContext'; 
import ProductList from './components/ProductList'; 
import Cart from './components/Cart'; 
 
const App = () => { 
  return ( 
    <CartProvider> 
      <div className="app"> 
        <ProductList /> 
        <Cart /> 
      </div> 
    </CartProvider> 
  ); 
}; 
 
export default App; 
