const reducer = (state,action) => {
    switch(action.type){
        case 'red':
            console.log(state.red)
            //red code
            let redState = state.red
            if(redState + action.payload > 255 || redState + action.payload < 0){
                return state;
            } else {
                return {
                    ...state,
                    red: redState + action.payload
                }
            }
            
        case 'green':
            //green code
            let greenState = state.green;
            if(greenState + action.payload > 255 || greenState + action.payload < 0){
                return state;
            } else {
                return {
                    ...state,
                    green: greenState + action.payload
                }
            }
           
        case 'blue':
            //blue code
            let blueState = state.blue;
            if(blueState + action.payload > 255 || greenState + action.payload < 0){
                return state;
            } else {
                return {
                    ...state,
                    blue: blueState + action.payload
                }
            }
            
        default:
            return state
    }
};

//action creators
export const RED_CHANGE = (payload) => {
    return {
        type: 'red',
        payload
    }
};

export const GREEN_CHANGE = (payload) => {
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