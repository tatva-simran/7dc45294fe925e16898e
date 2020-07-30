//import libraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const CustomButton = ({onPress, buttonStyle, buttonText}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.commonButtonCSS, buttonStyle]}>
      <Text style={[styles.contentsText]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  commonButtonCSS: {
    height: 35,
    width: '50%',
    backgroundColor: 'transparent',
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentsText: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 0.1,
    lineHeight: 18,
  },
});
