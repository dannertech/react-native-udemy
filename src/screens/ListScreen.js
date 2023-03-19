import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const data = ["Danner", "KeyShawn", "Que", "Brian", "Khiry"];
    return(
        <FlatList 
        data={data}
        renderItem = {({item}) => {
            return (
                <Text>{item}</Text>
            )
        }}

        />
    )
};

export default ListScreen;