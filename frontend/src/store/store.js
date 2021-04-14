import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {getProducts, getSingleProduct}from '../reducers/productReducer';
import thunk from 'redux-thunk';
import { addToCart } from '../reducers/cartReducer';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [],
    }
};


const rootReducers = combineReducers({
    products:getProducts,
    singleProduct: getSingleProduct,
    cartItems: addToCart
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;