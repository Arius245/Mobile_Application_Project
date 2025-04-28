import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubmitButton from './SubmitButton';
import Input from './Input';

import firebase from 'firebase';

LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logInUser = () => {
    props.showLoading();
    //We'll add gatekeepers here
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //Handle returning user
        props.acceptUser(email);
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            //Handle new user
            props.acceptUser(email);
          })
          .catch(() => {
            //Handle bad user
            props.rejectUser();
            firebase.auth().signOut();
          }); //End of createUserWithEmailAndPassword
      }); //End of signInWithEmailAndPassword
  };
  return (
    <View>
      <Input
        label="Email"
        value={email}
        placeholder="mary@example.com"
        onChangeText={(email) => setEmail(email)}
      />
      <Input
        label="Password"
        value={password}
        placeholder="******"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <SubmitButton whenPressed={logInUser}>Login or Register!</SubmitButton>
    </View>
  );
};
export default LoginForm;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    backgroundColor: 'hsl(195, 52%, 32%)',
  },
  subbutton: {
    marginTop: 150,
  },
});
