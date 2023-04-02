import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={{display: 'flex', borderWidth: 5, borderColor: 'black', height: '100%',justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: 150, width: 150, backgroundColor: 'gold', borderWidth: 2, borderColor: 'red'}}></View>
            <View style={{height: 150, width: 150, backgroundColor: 'purple'}}></View>
            <View style={{height: 150, width: 150, backgroundColor: 'red'}}></View>
        </View>
    )
};

const styles = StyleSheet.create({});

export default BoxScreen;

