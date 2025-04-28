import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import InfoButton from './InfoButton.js';

const Card = (props) => {
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
      style={styles.cardContainer}>
      <View style={styles.cardTop}>
        <Image
          style={styles.cardImg}
          source={{
            uri: props.image,
          }}
        />
        <View style={styles.cardDetails}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.h1}>{props.title}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.h2}>By: {props.creator}</Text>
          <Text style={styles.h2}>Type: {props.type}</Text>
        </View>
      </View>
      <View style={styles.cardDescriptionArea}>
        <View style={styles.cardDescription}>
          <Text style={styles.p1}>User Description:</Text>
          <Text numberOfLines={5} ellipsizeMode="tail" style={styles.p2}>
            {props.des}
          </Text>
        </View>
        {/*
        <View style={styles.infoButton}>
          <InfoButton
            navigation={props.navigation}
            title={props.title}
            image={props.image}
            creator={props.creator}
            type={props.type}
            link={props.link}
            des={props.des}
          />
        </View>
        */}
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 350,
    // width: '93%',
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: 'hsl(0, 100%, 97%)',
    borderWidth: 4,
    borderColor: 'hsl(234, 41%, 30%)',
    borderRadius: 40,
    boxShadow: '0px 6px 8px hsl(234, 41%, 20%)',
    margin: 15,
    padding: 20,
  },
  cardTop: {
    // flex: 1.5,
    height: '40%',
    flexDirection: 'row',
    // borderWidth: 2,
  },
  cardImg: {
    // height: '100%',
    // width: '40%',
    height: 125,
    // width: 120,
    width: 125,
    borderWidth: 2,
    borderColor: 'hsl(234, 41%, 30%)',
    borderRadius: 20,
    objectFit: 'contain',
  },
  cardDetails: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: "65%",
    // borderWidth: 2,
  },
  cardDescriptionArea: {
    flexDirection: 'row',
    marginTop: 20,
    // borderWidth: 2,
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
  },
  cardDescription: {
    flexDirection: 'column',
    // marginTop: 50,
    // borderWidth: 2,
    width: '100%',
  },
  infoButton: {
    // borderWidth: 2,
    marginLeft: 5,
    width: '20%',
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
    overflow: 'clip',
    // borderWidth: 2,
    width: 180,
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
    // fontVariant: 'small-caps',
    textAlign: 'left',
    marginTop: 8,
    marginLeft: 10,
  },
});
