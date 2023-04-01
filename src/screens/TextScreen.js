import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    console.log(name);
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput value={name} autoCapitalize='none' autoCorrect={false} style={styles.input} onChangeText={(text) => setName(text)}/>
            {name.length > 5 ? <Text>Passed</Text> : <Text>Password must be 5 characters or more</Text>}
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