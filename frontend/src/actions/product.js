
import axios from 'axios';
import {GET_PRODUCTS,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL,GET_PRODUCTS_BY_ID,GET_PRODUCTS_BY_ID_SUCCESS} from '../constants/productConstant'
const url = "http://localhost:4000/products/";

export const getProducts = () => async(dispatch) => {
   
    try{
        
        dispatch({
            type:GET_PRODUCTS
        })
        await axios.get(url).then((res) => {
           
            dispatch({type:GET_PRODUCTS_SUCCESS, payload:res.data.data.products})
        })
    }catch(error){
      
        dispatch({type:GET_PRODUCTS_FAIL, payload:error})
    }
}

export const getSingleProduct = (productId) => async(dispatch) => {
  
    try{
       
        dispatch({
            type:GET_PRODUCTS_BY_ID,
            productId:productId
        })
       
        await axios.get(`${url}${productId}`).then(res => {
            
            dispatch({type:GET_PRODUCTS_BY_ID_SUCCESS, payload:res.data});
        })
    }catch(error){
       
        dispatch({type:GET_PRODUCTS_FAIL, payload:error});
    }
}