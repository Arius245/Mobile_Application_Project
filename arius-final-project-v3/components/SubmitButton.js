import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubmitButton = props => {
  return(
    <TouchableOpacity onPress={props.whenPressed} style={ styles.button }>
      <Text style={ styles.buttonText }>{props.children}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton;

const styles = {
  button: {
    height: 40,
    marginVertical: 5,
    borderColor: "hsl(234, 41%, 30%)",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText: {
    alignSelf: "center",
    color: "hsl(234, 41%, 30%)",
    fontSize: 20,
    fontWeight: "bold"
  }
};