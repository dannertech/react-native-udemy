import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    const beach = require('../../assets/images/beach.jpg');
    const forest = require('../../assets/images/forest.jpg');
    const mountain = require('../../assets/images/mountain.jpg');

    return (
        <View>
            <ImageDetail title="Beach Image" image={beach}/>
            <ImageDetail title="Forest Image" image={forest}/>
            <ImageDetail title="Mountain Image" image={mountain}/>
        </View>
    )
};

export default ImageScreen;

