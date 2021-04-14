import * as actionType from '../constants/cartConstant';

export const addToCart = (state = {cartItems:[]}, action) => {

    switch(action.type){
        case actionType.ADD_TO_CART:
        const newItem = action.payload;

        const exist = state.cartItems.find(pro => pro.productId === newItem.productId);

        if(exist){

          const newCartItem = state.cartItems.map((x) => x.productId === exist.productId ?  newItem: x);
    
          const newCartFilterItem = newCartItem.filter((pro) => pro.productId == newItem.productId);
            
          for(const data of newCartFilterItem){
       
          switch(data.offerType){
              case 'discountPrice':            
                  if(Number(data.quantity) >= 3){                   
                    data.price = newItem.specialPrice
                    data.total = data.quantity * data.price
                  }
                break;
             case 'buyTwoGetOne':       
                if(Number(data.quantity) == 2 ){                                  
                    data.quantity = Number(data.quantity)+1
                    data.total = data.quantity * data.price
                }
                break;  
            }
           
        }
          
        return{ ...state, cartItems: newCartItem }  
          
        }else{
           
            switch(newItem.offerType){
                case 'discountPrice':
                 
                    if(Number(newItem.quantity) >= 3){                       
                        newItem.price = newItem.specialPrice
                        newItem.total = newItem.quantity * newItem.price
                    }
                  break;
               case 'buyTwoGetOne':            
                  if(Number(newItem.quantity) == 2){                  
                    newItem.quantity = Number(newItem.quantity)+1
                    newItem.total = newItem.quantity * newItem.price
                  }
                  break;  
              }
            
              return{ ...state, cartItems:[...state.cartItems,newItem] }
             
        }
        default:
            console.log("STATE = ",state);
            return state;
    }
}