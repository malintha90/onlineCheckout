import {GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL,GET_PRODUCTS_BY_ID_SUCCESS,GET_PRODUCTS_BY_ID_FAIL} from '../constants/productConstant';

export const getProducts = (state= {products:[]}, action) => {
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
        case GET_PRODUCTS_FAIL: 
            return {product: action.payload}
        default:
            return state;
    }
}

export const getSingleProduct = (state= {product: []}, action)=> {
    switch(action.type){
        case GET_PRODUCTS_BY_ID_SUCCESS:
            return {product:action.payload}
        case GET_PRODUCTS_BY_ID_FAIL: 
            return {product: action.payload}
        default:
            return state;
    }
}