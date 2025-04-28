import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const InfoButton = (props) => {
  const { title, image, creator, type, link, des } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('DetailScreen', {
          title,
          image,
          creator,
          type,
          link,
          des,
        })
      }
      style={styles.infoButton}>
      <Text style={styles.buttonText}>Learn More</Text>
    </TouchableOpacity>
  );
};
export default InfoButton;

const styles = StyleSheet.create({
  infoButton: {
    width: 60,
    height: 60,
    // top: 30,
    borderRadius: 30,
    backgroundColor: 'hsl(234, 41%, 30%)',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'hsl(0, 100%, 97%)',
    fontSize: 16,
    fontFamily: 'cursive',
    textAlign: 'center',
    paddingRight: 1,
  },
});
