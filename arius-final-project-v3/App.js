import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import PostScreen from './screens/PostScreen';
import DetailScreen from './screens/DetailScreen';
import { Image, StyleSheet } from 'react-native';

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

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerStyle: {
            height: 95,
            backgroundColor: 'hsl(234, 41%, 30%)',
            boxShadow: '0px 5px 8px hsl(234, 41%, 20%)',
          },
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'hsl(0, 100%, 97%)',
          },
        }}>
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            title: 'Post Details',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
        <Stack.Screen name="Home">
          {() => (
            <Tab.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{ headerShown: false }}>
              <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  title: 'Home',
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={{
                        uri: 'https://ariusahmad.com/nmd445/home.png',
                      }}
                    />
                  ),
                  tabBarStyle: {
                    backgroundColor: 'hsl(234, 41%, 30%)',
                    height: '12%',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    boxShadow: '0px -3px 5px hsl(234, 41%, 20%)',
                  },
                  tabBarShowLabel: false,
                  tabBarLabelPosition: 'below-icon',
                  tabBarLabelStyle: {
                    fontWeight: 'bold',
                  },
                  tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 15,
                  },
                  tabBarActiveTintColor: 'hsl(71, 66%, 77%)',
                  tabBarInactiveTintColor: 'hsl(90, 42%, 63%)',
                  tabBarActiveBackgroundColor: 'hsl(234, 41%, 22%)',
                }}
              />
              <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                  title: 'Search',
                  headerStyle: {
                    height: 95,
                    backgroundColor: 'hsl(208, 66%, 23%)',
                    boxShadow: '0px 5px 8px hsl(208, 66%, 18%)',
                  },
                  headerTitleStyle: {
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'hsl(90, 42%, 63%)',
                  },
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={{
                        uri: 'https://ariusahmad.com/nmd445/search.png',
                      }}
                    />
                  ),
                  tabBarStyle: {
                    backgroundColor: 'hsl(234, 41%, 30%)',
                    height: '12%',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    boxShadow: '0px -3px 5px hsl(234, 41%, 20%)',
                  },
                  tabBarShowLabel: false,
                  tabBarLabelPosition: 'below-icon',
                  tabBarLabelStyle: {
                    fontWeight: 'bold',
                  },
                  tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 15,
                  },
                  tabBarActiveTintColor: 'hsl(71, 66%, 77%)',
                  tabBarInactiveTintColor: 'hsl(90, 42%, 63%)',
                  tabBarActiveBackgroundColor: 'hsl(234, 41%, 22%)',
                }}
              />
              <Tab.Screen
                name="PostScreen"
                component={PostScreen}
                options={{
                  title: 'Post',
                  headerStyle: {
                    height: 95,
                    backgroundColor: 'hsl(208, 66%, 23%)',
                    boxShadow: '0px 5px 8px hsl(208, 66%, 18%)',
                  },
                  headerTitleStyle: {
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'hsl(90, 42%, 63%)',
                  },
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={{
                        uri: 'https://ariusahmad.com/nmd445/post.png',
                      }}
                    />
                  ),
                  tabBarStyle: {
                    backgroundColor: 'hsl(234, 41%, 30%)',
                    height: '12%',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    boxShadow: '0px -3px 5px hsl(234, 41%, 20%)',
                  },
                  tabBarShowLabel: false,
                  tabBarLabelPosition: 'below-icon',
                  tabBarLabelStyle: {
                    fontWeight: 'bold',
                  },
                  tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 15,
                  },
                  tabBarActiveTintColor: 'hsl(71, 66%, 77%)',
                  tabBarInactiveTintColor: 'hsl(90, 42%, 63%)',
                  tabBarActiveBackgroundColor: 'hsl(234, 41%, 22%)',
                }}
              />
              <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                  title: 'Profile',
                  headerStyle: {
                    height: 95,
                    backgroundColor: 'hsl(208, 66%, 23%)',
                    boxShadow: '0px 5px 8px hsl(208, 66%, 18%)',
                  },
                  headerTitleStyle: {
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'hsl(90, 42%, 63%)',
                  },
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={{
                        uri: 'https://ariusahmad.com/nmd445/account.png',
                      }}
                    />
                  ),
                  tabBarStyle: {
                    backgroundColor: 'hsl(234, 41%, 30%)',
                    height: '12%',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    boxShadow: '0px -3px 5px hsl(234, 41%, 20%)',
                  },
                  tabBarShowLabel: false,
                  tabBarLabelPosition: 'below-icon',
                  tabBarLabelStyle: {
                    fontWeight: 'bold',
                  },
                  tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 15,
                  },
                  tabBarActiveTintColor: 'hsl(71, 66%, 77%)',
                  tabBarInactiveTintColor: 'hsl(90, 42%, 63%)',
                  tabBarActiveBackgroundColor: 'hsl(234, 41%, 22%)',
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    // height: '70%',
    // width: '13%',
    height: 50,
    width: 50,
    borderRadius: 50,
    marginBottom: 13,
    backgroundColor: 'hsl(0, 100%, 97%)',
  },
});
