import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    console.log(password);
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput value={password} autoCapitalize='none' autoCorrect={false} style={styles.input} onChangeText={(text) => setPassword(text)}/>
            {password.length > 5 ? <Text>Passed</Text> : <Text>Password must be 5 characters or more</Text>}
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