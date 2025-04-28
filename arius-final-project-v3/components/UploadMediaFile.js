import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useState } from 'react';
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

const UploadMediaFile = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  };

  const uploadMedia = async () => {
    setUploading(true);
  
    try{
      const { uri } = await FileSystem.getInfoAsync(image);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });

      const filename = image.substring(image.lastIndexOf('/') + 1);
      const ref = firebase.storage().ref().child(filename);

      await ref.put(blob);
      setUploading(false);
      Alert.alert('Photo Uploaded!');
      setImage(null);
    } catch (error) {
        console.error(error);
        setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Select an image</Text>
        <View style={styles.imageContainer}>
          {image && <Image
            source={{ uri: image }}
            style={{width: 300, height: 300}}
          />}
          <TouchableOpacity style={styles.uploadButton} onPress={uploadMedia}>
            <Text style={styles.buttonText}>Upload image</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default UploadMediaFile

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  }
});