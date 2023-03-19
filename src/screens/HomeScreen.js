import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const HomeScreen = (props) => {
  //console.log(this.props);
  return (
  <View>
    <Button title="List Screen" onPress={() => props.navigation.navigate('List')}/>
    <Button title="Components Screen" onPress={() => props.navigation.navigate('Components')}/>
  </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
