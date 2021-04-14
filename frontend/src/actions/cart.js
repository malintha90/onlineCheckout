import {ADD_TO_CART,ADD_TO_CART_FAIL} from '../constants/cartConstant';
import axios from 'axios';
const url = "http://localhost:4000/products/";

export const itemAddToCart = (productId, qty) => async(dispatch,getState) => {

    try{
        const {data} = await axios.get(`${url}${productId}`);
    
        dispatch({
            type:ADD_TO_CART,
            payload: {
                productId: productId,
                quantity: qty,
                productName:data[0].name,
                price: data[0].price,
                specialPrice: data[0].offerPrice,
                offerType: data[0].offerType,
                image: data[0].image,
                total: 0
            }
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }catch(e){
        dispatch({type:ADD_TO_CART_FAIL, payload:e});
    }
    
}