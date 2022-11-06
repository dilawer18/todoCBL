//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';




// create a component
const SocialComp = ({icon}) => {
    return (
   
        <TouchableOpacity style={styles.container}>
 <Image source={icon}/>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
  
    },
});

//make this component available to the app
export default SocialComp;
