import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ColorButtonComponent = (props) => {
    return(
        <Button title={props.title} onPress={() => props.pressFunction()}/>
    )
};

export default ColorButtonComponent;