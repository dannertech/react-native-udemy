import React, {useState, useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ColorButtonComponent from '../Components/ColorButtonComponent';
import reducer from '../reducers/ColorReducer';
import {RED_CHANGE, GREEN_CHANGE, BLUE_CHANGE} from '../reducers/ColorReducer';

const ColorBoxScreen = () => {
    const initialState = {
        red: 2, 
        blue: 255, 
        green: 255
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    
    
    // const [red, setRed] = useState(255);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    console.log(state.red);
    return(
        <View>
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, alignSelf: 'center'}}>
                <Text>Your Random Color</Text>
            </View>
            <ColorButtonComponent title="Increase Red" pressFunction={() => dispatch(RED_CHANGE(15))}/>
            {/* <ColorButtonComponent title="Increase Red" pressFunction={() => setRed(red + 20 < 255 ? red + 10 : 255)}/>
            <ColorButtonComponent title="Decrease Red" pressFunction={() => setRed(red - 20 > 0 ? red - 10 : 0)}/>
            <ColorButtonComponent title="Increase Green" pressFunction={() => setGreen(green + 20 < 255 ? green + 20 : 255)}/>
            <ColorButtonComponent title="Decrease Green" pressFunction={() => setGreen(green - 20 > 0 ? green - 20 : 0)}/>
            <ColorButtonComponent title="Increase Blue" pressFunction={() => setBlue(blue + 20 < 255 ? blue + 20 : 255)}/>
            <ColorButtonComponent title="Decrease Blue" pressFunction={() => setBlue(blue - 20 > 0 ? blue - 20 : 0)}/> */}
        </View>
    )
};

export default ColorBoxScreen;
