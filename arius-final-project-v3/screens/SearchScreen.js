import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';
import DropdownButton from '../components/DropdownButton';
import Card from '../components/Card.js';
import Spinner from '../components/Spinner';

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

export default function SearchScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setPostType] = useState('');

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
    postObjects.push(posts[postId]);
  }
  postObjects.reverse();

  // Filter by type
  const filteredPosts = type
    ? postObjects.filter((post) => post.type === type)
    : postObjects;

  const renderPosts = () => {
    // console.log('posts is ' + posts.length);

    if (isLoading) {
      <Spinner color="hsl(227, 46%, 77%)"/>;
    } else {
      return filteredPosts.map((post) => (
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
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.headerText}>Search: </Text>
          <DropdownButton 
            value={type}
            onChange={(type) => setPostType(type)}
          />
        </View>
      </View>
      <ScrollView style={styles.cardContainer}>
        {renderPosts()}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'hsl(227, 46%, 77%)',
  },
  searchBar: {
    width: "100%",
    // backgroundColor: 'hsl(227, 46%, 68%)',
    padding: 10,
    marginTop: 8,
    justifyContent: 'center',
    // alignItems: "center",
    gap: 10,
    boxShadow: '0px 5px 8px hsl(227, 46%, 60%)',
  },
  searchContainer: {
    backgroundColor: 'hsl(227, 46%, 68%)',
    justifyContent: 'flex-start',
    alignItems: "center",
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
});
