import { ADD_To_Cart_C,Remove_To_Cart_C } from "../Constants";
const initailState={
    cartdata : []
};


export default function AddCartR(state=[],actions){
   

    switch(actions.type){
        case ADD_To_Cart_C:
            // console.warn("reducer2",actions)
            return [
                ...state,
                {cartdata:actions.data}

            ]
        case Remove_To_Cart_C:
            console.warn("REm")
            state.pop()
            return [
                ...state
            ]   
        default:
                return state;
    }


}
