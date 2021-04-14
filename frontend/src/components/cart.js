import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { itemAddToCart } from '../actions/cart';

const Cart = () => {
    const {cartItems} = useSelector(state => state.cartItems);

    const dispatch = useDispatch();
    
    const addToCartHandler = (productId, qty) => {

       dispatch(itemAddToCart(productId, qty));  
     
    }

    return (
        <div className="cartScreen">
             <Link to="/">Continue Shopping</Link>
            <div className="cartScreenleft">               
                <h2>Shopping Cart</h2>
                {cartItems.map((cartItem) => (
                     <div className="cartItem" key={cartItem.productId}>
                     <div className="cartItemImage">
                         <img src={cartItem.image} alt=""/>
                     </div>
                     <p className="cartItemPrice">{cartItem.price}</p>
                     <p className="cartItemPrice">{cartItem.quantity}</p>
                     <input type="text" className="cartItemQty" onChange={(e)=> addToCartHandler(cartItem.productId, e.target.value)}/>
                    
                 </div>
                ))}
               
            </div>
            <div className="cartScreenRight">
                <div className="cartInfo">
                    <p>Subtotal : ({cartItems.reduce((a,b)=> a + Number(b.quantity), 0)}) items</p>
                    <p>Total :  <b>{cartItems.reduce((a,b)=> a + b.price * b.quantity, 0).toFixed(2)}</b></p>
                </div>
                <div>
                     <button>Checkout</button>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;
