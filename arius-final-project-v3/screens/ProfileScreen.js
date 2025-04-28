import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import UploadMediaFile from '../components/UploadMediaFile';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBar}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            }}
          />
          <Text style={styles.headerText}>Profile: </Text>
        </View>
      </View>
      <Text style={styles.p}>To be implemented at a later date...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'hsl(227, 46%, 77%)',
  },
  profileBar: {
    width: '100%',
    padding: 10,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    // boxShadow: '0px 5px 8px hsl(227, 46%, 60%)',
    // borderWidth: 2,
  },
  profileContainer: {
    backgroundColor: 'hsl(227, 46%, 68%)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: '0px 5px 8px hsl(227, 46%, 60%)',
    height: '25%',
    // borderWidth: 2,
  },
  cardContainer: {
    flexGrow: 1,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'hsl(234, 41%, 30%)',
    fontStyle: 'italic',
  },
  p: {
    fontSize: 18,
    textAlign: 'left',
    color: 'hsl(234, 41%, 30%)',
    fontStyle: 'italic',
    padding: 20,
  },
  img: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: 'hsl(234, 41%, 30%)',
    borderRadius: 50,
    objectFit: 'contain',
  }
});
