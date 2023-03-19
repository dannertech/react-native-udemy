import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.image} alt={props.title} style={styles.imageStyle}/>
            <Text>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 100,
        width: 100
    }
})
export default ImageDetail;