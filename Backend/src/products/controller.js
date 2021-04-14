const service = require('./service');

const getProducts = async(req, res) => {
    try{
        
        const result = await service.getProducts();
        res.send(result);
    }catch(error){
        res.send(error);
    }
   
}

const getProduct= async(req, res) => {
    try{
        productId = req.params.id;
       
        const result = await service.getProduct(productId);
        
        res.send(result);
    }catch(error){
        res.send(error);
    }
   
}

module.exports = {getProducts,getProduct};
