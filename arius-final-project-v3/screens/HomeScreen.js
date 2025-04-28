import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import Card from '../components/Card.js';
import Spinner from '../components/Spinner';
// import { posts } from '../data/posts.js';

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

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase
      .database()
      .ref('posts2')
      .on('value', (snapshot) => {
        setPosts(snapshot.toJSON());
        setIsLoading(false);
      });
  }, []);

  const postObjects = [];
  for (var postId in posts) {
    // Add if you want to confirm the data downloaded correctly.
    // console.log(postId);
    postObjects.push(posts[postId]);
  }
  postObjects.reverse();

  const renderPosts = () => {
    // console.log('posts is ' + posts.length);

    if (isLoading) {
      <Spinner color="hsl(227, 46%, 77%)"/>;
    } else {
      return postObjects.map((post) => (
        <Card
          navigation={navigation}
          title={post.title}
          image={post.image}
          creator={post.creator}
          type={post.type}
          link={post.link}
          des={post.des}
        />
      ));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {renderPosts()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    backgroundColor: 'hsl(227, 46%, 77%)',
    // padding: 8,
  },
  header: {
    backgroundColor: '	hsl(208, 66%, 23%)',
    boxShadow: '0px 5px 8px hsl(208, 66%, 18%)',
  },
  headerText: {
    margin: 15,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'hsl(90, 42%, 63%)',
  },
  menu: {
    backgroundColor: 'hsl(208, 66%, 23%)',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    boxShadow: '0px -3px 5px hsl(208, 66%, 18%)',
  },
  cardContainer: {
    flexGrow: 1,
    // overflow: 'scroll',
  },
  icon: {
    // height: '70%',
    // width: '13%',
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'hsl(90, 42%, 63%)',
  },
});
