import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CounterButton = (props) => {
    return(
        <Button title={props.title} onPress={() => props.counterFunction()}/>
    )
};

export default CounterButton;