import { ADD_To_Cart_C,Remove_To_Cart_C } from "../Constants"


export const addToCartA = (data) =>{//yha par hum har data ko usky function sy hisab sy deivide krty hai r conainer ko function dety hai 
    // console.warn("Actions",data)
    return{
        type: ADD_To_Cart_C,
        data:data
    }
}
export const RemoveToCartA = () =>{//yha par hum har data ko usky function sy hisab sy deivide krty hai r conainer ko function dety hai 
    // console.warn("Actions",data)
    return{
        type: Remove_To_Cart_C,
        
    }
}