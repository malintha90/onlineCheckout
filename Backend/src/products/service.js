const dataSet = require('./mockDataSet');
const getProducts = async() => {
    try{    
        return dataSet;
    }catch(error){
        throw(error);
    }
}

const getProduct = async(productId) => {
    try{  
        const product =  dataSet.data.products.filter(pro => pro._id == productId);
        return product;
    }catch(error){
        throw(error);
    }
}

module.exports = {getProducts, getProduct};