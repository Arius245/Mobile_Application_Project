import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';

const LongInput = (props) => {
  const [inputHeight, setInputHeight] = useState(64);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.label}> {props.label} </Text>
      </TouchableWithoutFeedback>
      <View>
        <TextInput
          multiline
          style={[styles.input, { height: inputHeight }]}
          autoCorrect={false}
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          onContentSizeChange={(width, height) =>
            setInputHeight(height)
          }
          // returnKeyType="done"
          // blurOnSubmit={true}
        />
      </View>
    </View>
  );
};
export default LongInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
    // gap: 10,
  },
  label: {
    fontSize: 18,
    color: "hsl(234, 41%, 30%)",
    // alignSelf: "flex-start"
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 4,
    fontSize: 18,
    color: 'black',
    alignSelf: "center",
    width: 230,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'hsl(234, 41%, 30%)',
    flexGrow: 1
  },
});
