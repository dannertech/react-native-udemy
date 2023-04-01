import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const TextScreen = () => {
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput placeholder='Name'/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default TextScreen;