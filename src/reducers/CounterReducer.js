import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {
                counter: state.counter + action.payload
            };
        case 'SUBTRACT':
            return {
                counter: state.counter + action.payload
            };
        default:
            return state;
    }
};

export default reducer;