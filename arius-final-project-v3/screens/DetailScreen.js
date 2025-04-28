import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';

const DetailScreen = (screen, params) => {
  const { title, image, creator, type, link, des } = screen.route.params;

  // console.log(link);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailScreen}>
        <View style={styles.cardInfo}>
          <Image
            style={styles.cardImg}
            source={{
              uri: image,
            }}
          />
          <View style={styles.cardDetails}>
            <Text style={styles.h1}>{title}</Text>
            <Text style={styles.h2}>By: {creator} </Text>
            <Text style={styles.h2}>Type: {type} </Text>
          </View>
        </View>
        <View style={styles.cardDescription}>
          <Text style={styles.p1}>User Description</Text>
          <Text numberOfLines={12} ellipsizeMode="tail" style={styles.p2}>
            {des}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => Linking.openURL( link )}>
          <Text style={styles.p3}>More...</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  moreButton: {
    height: 50,
    width: 150,
    borderRadius: 5,
    backgroundColor: 'hsl(234, 41%, 30%)',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
  },
  container: {
    flex: 1,
    backgroundColor: 'hsl(227, 46%, 77%)',
  },
  detailScreen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'hsl(0, 100%, 97%)',
    borderWidth: 4,
    borderColor: 'hsl(234, 41%, 30%)',
    borderRadius: 40,
    boxShadow: '0px 6px 8px hsl(234, 41%, 20%)',
    margin: 15,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardInfo: {
    // flex: 1.5,
    flexDirection: 'column',
    // borderWidth: 2,
  },
  cardImg: {
    // height: '50%',
    // width: '80%',
    height: 150,
    width: 150,
    borderWidth: 2,
    borderColor: 'hsl(208, 66%, 23%)',
    borderRadius: 20,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  cardDetails: {
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    marginTop: 10,
    // borderWidth: 2,
  },
  cardDescription: {
    // flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    marginTop: 25,
    // borderWidth: 2,
  },
  h1: {
    color: 'hsl(234, 41%, 30%)',
    fontSize: 20,
    fontStyle: 'italic',
    fontVariant: 'small-caps',
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase',
    marginLeft: 8,
  },
  h2: {
    color: 'hsl(234, 41%, 30%)',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 8,
  },
  p1: {
    color: 'hsl(234, 41%, 30%)',
    fontSize: 16,
    fontVariant: 'small-caps',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
  },
  p2: {
    color: 'hsl(234, 41%, 30%)',
    fontSize: 16,
    fontVariant: 'small-caps',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 10,
  },
  p3: {
    color: 'hsl(0, 100%, 97%)',
    fontSize: 16,
    fontVariant: 'small-caps',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 10,
  },
});
