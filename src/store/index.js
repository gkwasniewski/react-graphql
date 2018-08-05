import { createStore } from 'redux';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TO-CART':
            return state.concat([action.data])
        default:
            return state
        }
    }
   

const store = createStore(reducer);

export default store; 