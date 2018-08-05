import { createStore } from 'redux';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state.concat([action.data])
        case 'DELETE_FROM_CART':
            console.log()
            return state.filter((data) => data.id !== action.data.id);
        case 'SEARCH_PRODUCTS': 
            console.log(action.data.name)
            /* falls through */
        default:
            return state
        }
    }
   

const store = createStore(reducer);

export default store; 