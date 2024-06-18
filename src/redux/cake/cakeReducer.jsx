import { BUY_CAKE } from "./cakeTypes"

const intialState = {
    NumOfCakes : 10 
}
const cakeReducer = (state = intialState, action) => {
    switch(action.type) {
        case BUY_CAKE : return{
            ...state,
            NumOfCakes: state.NumOfCakes - 1
        }

        default : return state

    }

}

export default cakeReducer;