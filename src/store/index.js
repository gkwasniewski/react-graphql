import { createStore } from 'redux';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TO-CART':
        return Object.assign({}, state, {data: action.data})
        default:
            break;
    }
    console.log('reducer', action)
    return state
}

const store = createStore(reducer);

export default store; 