const reducer = (state,action) => {
    switch(action.type){
        case 'red':
            //red code
            let redState = state.red
            console.log(redState);
            if(redState + action.payload < 255 && redState + action.payload >= 0){
                return {
                    ...state,
                    red: redState + action.payload
                }
            } else {
                return state;
            }
            
        case 'green':
            //green code
            let greenState = state.green;
            return {
                ...state,
                green: greenState + action.payload
            }
        case 'blue':
            //blue code
            let blueState = state.blue;
            return {
                ...state,
                blue: blueState + action.payload
            }
        default:
            return state
    }
};

//action creators
export const RED_CHANGE = (payload) => {
    return {
        type: 'red',
        payload: payload
    }
};

export const GREEN_CHANGE = () => {
    return {
        type: 'green',
        payload
    }
}

export const BLUE_CHANGE = (payload) => {
    return {
        type: 'blue',
        payload
    }
};




export default reducer;