import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ComponentsScreen = () => {
    const userName = "Danner";
    return (
        <View>
            <Text style={styles.header}>Getting Started with React Native</Text>
            <Text styles={styles.name}>{userName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    },
    name: {
        fontSize: 20
    }
})

export default ComponentsScreen;
