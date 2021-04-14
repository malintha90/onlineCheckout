import React, { useState } from 'react';
import '../styles/product.css';
import { useDispatch } from 'react-redux';
import {itemAddToCart} from '../actions/cart';
import  {useHistory} from 'react-router-dom';

const Product = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [qty, setQty] = useState(1);
    
    const addToCartHandler = (e) => {
       const productId = e.target.value;
       dispatch(itemAddToCart(productId, qty));  
       history.push('/cart');
    }

    return (
        <div  className="productScreen">
            <img src={`..${props.item.image}`} alt=""/>
            <div className="productInfo">
                <p className="productName">{props.item.name}</p>
                <p className="productDescription">{props.item.description}</p>
                <p className="productPrice">{props.item.price}</p>
                <div>
                    <input type="text" className="rightQty" value={qty} onChange={(e)=> setQty(e.target.value)}/>
                    <button type="button" value={props.item._id} onClick={addToCartHandler} className="info_button" >
                         ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
