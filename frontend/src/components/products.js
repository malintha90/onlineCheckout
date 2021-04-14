import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../actions/product';
import Product from './product';
import '../styles/product.css';

const Products = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products);
    
    useEffect(() => {
         dispatch(getProducts())
    },[dispatch]);

    return (
        <div className="productsList">
            {
              products.map(items => (
                  <Product key={items._id} item={items}/>
              ))  
            }
        </div>
    )
}

export default Products
