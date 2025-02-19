import React, { createContext, useReducer, useContext } from 'react'; 
 
const CartContext = createContext(); 
 
const cartReducer = (state, action) => { 
  switch (action.type) { 
    case 'ADD_TO_CART': 
      const existingItem = state.cart.find(item => item.id === action.payload.id); 
      if (existingItem) { 
        return { 
          ...state, 
          cart: state.cart.map(item => 
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item 
          ), 
        }; 
      } 
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }; 
 
    case 'UPDATE_QUANTITY': 
      return { 
        ...state, 
        cart: state.cart.map(item => 
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item 
        ), 
      }; 
 
    case 'REMOVE_FROM_CART': 
      return { 
        ...state, 
        cart: state.cart.filter(item => item.id !== action.payload.id), 
      }; 
 
    default: 
      return state; 
  } 
}; 
 
const initialState = { cart: [] }; 
 
export const CartProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(cartReducer, initialState); 
 
  return ( 
    <CartContext.Provider value={{ cart: state.cart, dispatch }}> 
      {children} 
    </CartContext.Provider> 
  ); 
}; 
 
export const useCart = () => useContext(CartContext); 
