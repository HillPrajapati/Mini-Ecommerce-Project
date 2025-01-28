import React, { useEffect, useState } from 'react'; 
import ProductCard from './ProductCard'; 
import './styles/global.css'; 
 
const ProductList = () => { 
  const [products, setProducts] = useState([]); 
 
  useEffect(() => { 
    fetch('https://fakestoreapi.com/products') 
      .then(response => response.json()) 
      .then(data => setProducts(data.slice(0, 5)));  
  }, []); 
 
  return ( 
    <div className="product-list"> 
      {products.map(product => ( 
        <ProductCard key={product.id} product={product} /> 
      ))} 
    </div> 
  ); 
}; 
 
export default ProductList;
