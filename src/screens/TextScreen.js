import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput value={name} autoCapitalize='none' autoCorrect={false} style={styles.input} onChange={(text) => setName(text)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    }
});

export default TextScreen;