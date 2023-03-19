import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "friend 1", age: 45},
        {name: "friend 2", age: 32},
        {name: "friend 4", age: 27},
        {name: "friend 5", age: 53},
        {name: "friend 6", age: 30},
    ];
    return(
        <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={friends}
        renderItem = {({item}) => {
            return (
                <View style={styles.textStyle}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                </View>
            )
        }}
        keyExtractor = {(item) => item.name}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;