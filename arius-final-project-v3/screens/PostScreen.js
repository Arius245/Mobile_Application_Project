import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import Input from '../components/Input';
import LongInput from '../components/LongInput';
import SubmitButton from '../components/SubmitButton';
import Spinner from '../components/Spinner';
import DropdownButton from '../components/DropdownButton';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCrsHyYFVfb5GN6vnd23V_RgGYnHZMd5M4',
  authDomain: 'first-project-arius.firebaseapp.com',
  projectId: 'first-project-arius',
  storageBucket: 'first-project-arius.firebasestorage.app',
  messagingSenderId: '531902585772',
  appId: '1:531902585772:web:9fc17ceeb9c91016193809',
  measurementId: 'G-29RDX054FZ',
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const imgAPIKey = '7b30991da389dabe5ab53ef01311c953';

export default function PostScreen({ navigation }) {
  const [title, setPostTitle] = useState('');
  const [image, setImage] = useState('');
  const [creator, setPostCreator] = useState('');
  const [type, setPostType] = useState('');
  const [link, setPostLink] = useState('');
  const [des, setPostDes] = useState('');

  const [message, setMessage] = useState('Waiting for your input...');
  const [isLoading, setIsLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState('');

  renderButton = () => {
    if (isLoading) {
      return <Spinner color="hsl(227, 46%, 77%)" />;
    } else {
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SubmitButton whenPressed={addRecord}>Add post</SubmitButton>
        </TouchableWithoutFeedback>
      );
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${imgAPIKey}`;

    const response = await FileSystem.uploadAsync(uploadUrl, image, {
      httpMethod: 'POST',
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      fieldName: 'image',
    });

    const result = JSON.parse(response.body);
    return result.data.url;
  };

  const addRecord = async () => {
    try {
      let finalImageUrl = '';

      if (image) {
        console.log('Uploading image to imgbb...');
        finalImageUrl = await uploadImage();
        console.log('Image uploaded:', finalImageUrl);
        setImageUrl(finalImageUrl);
      }

      console.log('Pushing to Firebase...');
      await firebase.database().ref('posts2').push({
        title,
        creator,
        type,
        link,
        des,
        image: finalImageUrl,
      });

      setMessage('Post Added!');
      console.log('Post Added!');
    } catch (error) {
      console.log('Error adding post:', error);
      setMessage('Error adding post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.headerText}>Add a Post: </Text>
      <View style={styles.inputBox}>
        <Input
          label="Title:"
          placeholder="Movie name"
          value={title}
          onChangeText={(title) => setPostTitle(title)}
        />
        <Input
          label="Creator:"
          placeholder="Jake Smith"
          value={creator}
          onChangeText={(creator) => setPostCreator(creator)}
        />
        <DropdownButton value={type} onChange={(type) => setPostType(type)} />
        <TouchableOpacity onPress={pickImage} style={styles.imagePickContainer}>
          <Text style={styles.buttonText}>Select image from camera roll</Text>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </TouchableOpacity>
        {/*
        <Input
          label="Type:"
          placeholder="Film"
          value={type}
          onChangeText={(type) => setPostType(type)}
        />
        
        <LongInput
          label="Image URL:"
          placeholder="https://example.com/"
          value={image}
          onChangeText={(image) => setImage(image)}
        />
        */}
        <LongInput
          label="Description:"
          placeholder="Type description here"
          value={des}
          onChangeText={(des) => setPostDes(des)}
        />
        <LongInput
          label="Link:"
          placeholder="https://example.com/movie"
          value={link}
          onChangeText={(link) => setPostLink(link)}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Text style={styles.message}>{message}</Text>
        </TouchableWithoutFeedback>
        {renderButton()}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    backgroundColor: 'hsl(227, 46%, 68%)',
    justifyContent: 'center',
    // padding: 8,
  },
  inputBox: {
    justifyContent: 'center',
    backgroundColor: 'hsl(227, 46%, 77%)',
    borderWidth: 4,
    borderColor: 'hsl(234, 41%, 30%)',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  message: {
    color: 'hsl(234, 41%, 30%)',
    fontSize: 20,
    paddingTop: 20,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'hsl(234, 41%, 30%)',
    fontStyle: 'italic',
    marginLeft: '5%',
  },
  imagePickContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: 40,
    backgroundColor: 'hsl(234, 41%, 30%)',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    // flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    // paddingLeft: 10,
  },
  buttonText: {
    color: 'hsl(0, 100%, 97%)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
