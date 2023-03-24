import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import CounterButton from '../Components/CounterButton';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    function changeCounterValue(num){
        setCounter(counter + (num));
        console.log(counter);
    }
    return (
        <View>
            <CounterButton title="Increase" counterFunction={() => changeCounterValue(1)}/>
            <CounterButton title="Decrease" counterFunction={() => changeCounterValue(-1)}/>
           <Text style={styles.counterText}>{counter}</Text>
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