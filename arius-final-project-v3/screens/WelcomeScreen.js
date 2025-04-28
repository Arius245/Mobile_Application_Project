import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import LoginForm from '../components/LoginForm';
import SubmitButton from '../components/SubmitButton';
import Spinner from "../components/Spinner";

const WelcomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [isLoading, setIsLoading ] = useState( false );
  const showLoading = () => {
		setIsLoading( true );
	};
	const hideLoading = () => {
		setIsLoading( false );
	};

  const acceptUser = (email) => {
    setIsLoggedIn(true);
    console.log(`Welcome, ${email}!`);
    Alert.alert(`Welcome, ${email}!`); // Won't appear in Web preview.
    setAccountName(email);
    hideLoading();
  };
  const rejectUser = () => {
    setIsLoggedIn(false);
    console.log(`We're sorry, but those aren't valid credentials`);
    Alert.alert(`We're sorry, but those aren't valid credentials`); // Won't appear in Web preview.
    hideLoading();
  };

  return !isLoading ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.welcomeContainer}>
      <Text style={styles.titleText}>Arius's App:</Text>
      <Text style={styles.headerText}>{accountName}</Text>
      {
        !isLoggedIn ? (
        // The user is not logged in.
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <LoginForm 
            acceptUser={acceptUser} 
            rejectUser={rejectUser} 
            showLoading={ showLoading }
		        hideLoading={ hideLoading }
          />
        </TouchableWithoutFeedback>

        ) : (

        // The use has logged in.
        <SubmitButton whenPressed={() => navigation.navigate('Home')}>
          Go to Home
        </SubmitButton>
        )
      }
    </KeyboardAvoidingView>

  ) : (

    <Spinner color="hsl(227, 46%, 77%)" />
  );

};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(227, 46%, 77%)',
  },
  subbutton: {
    marginTop: 150,
  },
  header: {
    justifyContent: 'flex-end',
    height: '100',
    width: '100%',
    backgroundColor: 'hsl(208, 66%, 23%)',
    boxShadow: '0px 5px 8px hsl(208, 66%, 18%)',
    marginBottom: '250',
  },
  headerText: {
    fontSize: 26,
    // fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'hsl(234, 41%, 30%)',
    marginTop: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'flex-start',
    color: 'hsl(234, 41%, 30%)',
  }
});
