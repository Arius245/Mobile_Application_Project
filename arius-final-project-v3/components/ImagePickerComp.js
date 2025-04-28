import { useState } from 'react';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComp() {
  // const [image, setImage] = useState<string | null>(null);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].base64);
    }
  };

    
  return ( 
    <TouchableOpacity  
      onPress={pickImage} 
      style={styles.container}>
      <Text style={styles.buttonText}>Select image from camera roll</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </TouchableOpacity>
  );
    

  // return (
  //   <View style={styles.container}>
  //     <Button title="Pick an image from camera roll" onPress={pickImage} />
  //        // The line below displays image after its picked
  //     {image && <Image source={{ uri: image }} style={styles.image} />}
  //   </View>
  // );

}

const styles = StyleSheet.create({
  container: {
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
    fontWeight: "bold",
    textAlign: 'center',
  },
});
