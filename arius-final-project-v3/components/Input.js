import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from 'react';

const Input = props => {
  const [inputHeight, setInputHeight] = useState(64);
  return (
  <View style={styles.inputRow}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableWithoutFeedback>
    <View>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    height: 40,
    width: 320,
    marginBottom: 4,
    justifyContent: "space-between",
    alignItems: "center"
  },
  label: {
    fontSize: 18,
    // alignSelf: "flex-start",
    color: "hsl(234, 41%, 30%)"
  },
  input: {
    color: "black",
    paddingHorizontal: 5,
    fontSize: 18,
    alignSelf: "flex-end",
    height: 30,
    width: 230,
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'hsl(234, 41%, 30%)'
  },
});