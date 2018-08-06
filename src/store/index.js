import { createStore } from 'redux';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemIndex = state.findIndex(item => item.id === action.data.id);
            if (itemIndex > -1) {
                state.splice(itemIndex, 1, {
                    id: action.data.id,
                    name: action.data.name,
                    price: action.data.price,
                    quantity: state[itemIndex].quantity + action.data.quantity
                })
                return [...state]
            } else {
                return state.concat([action.data])
            }
        case 'DELETE_FROM_CART':
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
