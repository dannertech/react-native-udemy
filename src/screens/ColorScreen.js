import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    function generateColor(){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        
        setColors([...colors, `rgb(${red}, ${green}, ${blue})`])
        console.log(colors);
    }
    return (
        <View>
            <Button title="Add a Color" onPress={() => generateColor()}/>
            <Text>This is the Color Screen</Text>
            <FlatList
            data={colors}
            keyExtractor={(item) => item}
            renderItem={({item}) => {
                console.log(item)
                return <View style={{height: 100, width: 100, backgroundColor: item}}>
                        <Text>This is a square</Text>
                    </View>
            }}
            />
        </View>
    )
};

export default ColorScreen;