import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { navigationRef } from "./rootNavigation";

import Header from "./Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Quote from "./Pages/Quote";
import Footer from "./Footer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      ref={navigationRef}
    >
      <Stack.Navigator initialRouteName="Initech" headerMode="screen">
        <Stack.Screen
          name="Initech"
          component={Home}
          options={{ header: () => <Header headerDisplay="INITECH" /> }}
        />
        <Stack.Screen name="News" component={News} options={{ header: () => <Header headerDisplay="INITECH NEWS" /> }}/>
        <Stack.Screen name="About" component={About} options={{ header: () => <Header headerDisplay="ABOUT INITECH" /> }}/>
        <Stack.Screen name="Quotes" component={Quote} options={{ header: () => <Header headerDisplay="INITECH QUOTES" /> }}/>
      </Stack.Navigator>
      <Footer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 70,
  },
  image: {
    height: 200,
    width: 300,
    resizeMode: "stretch",
    marginBottom: 50,
  },
});
