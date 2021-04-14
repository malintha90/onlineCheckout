import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../actions/product';

import '../styles/product.css';

const ProductScreen = (props) => {

    const productId = props.match.params.id;
    
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.singleProduct);  

    const singleProduct = product[0];

    useEffect(()=>{
      dispatch(getSingleProduct(productId))
    },[dispatch])
      
    return (
        <div className="singleProductScreen">
            <div className="productScreenLeft">
                <div className="leftImage">
                    <img src={singleProduct.image} alt=""/>
                </div>
                <div className="productInfo">
                    <p className="leftName">{singleProduct.name}</p>
                    <p className="leftDescription">{singleProduct.description}</p>
                    <p className="leftPrice">{singleProduct.price}</p>
                </div>
            </div>
            <div className="productScreenRight">
                <div className="productInfoRight">
                    <p className="rightName">{singleProduct.name}</p>
                    <p className="rightDescription">{singleProduct.description}</p>
                    <p className="rightQty"><input type="text"/></p>
                    <p className="rightbtn"><button className="addtoCart" >ADD TO CART</button></p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
