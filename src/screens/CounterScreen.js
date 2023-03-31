import React, {useState, useReducer} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import CounterButton from '../Components/CounterButton';
import reducer from '../reducers/CounterReducer';

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    
    return (
        <View>
            <CounterButton title="Increase" counterFunction={() => dispatch({type: 'ADD', payload: 1})}/>
            <CounterButton title="Decrease" counterFunction={() => dispatch({type: 'SUBTRACT', payload: -1})}/>
           <Text style={styles.counterText}>{state.counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    counterText: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default CounterScreen;