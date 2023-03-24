import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const HomeScreen = (props) => {
  //console.log(this.props);
  return (
  <View>
    <Button title="List Screen" onPress={() => props.navigation.navigate('List')}/>
    <Button title="Components Screen" onPress={() => props.navigation.navigate('Components')}/>
    <Button title="Image Screen" onPress={() => props.navigation.navigate('Image')}/>
    <Button title="Counter Screen" onPress={() => props.navigation.navigate('Counter')}/>
  </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
