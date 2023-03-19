import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is the Components Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
});

export default ComponentsScreen;
