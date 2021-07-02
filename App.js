import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

import Header from "./Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Quote from "./Pages/Quote";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  return (
    <NavigationContainer
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack.Navigator initialRouteName="Initech" headerMode="screen">
        <Stack.Screen
          name="Initech"
          component={Home}
          options={{ header: () => <Header headerDisplay="INITECH" /> }}
        />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Quotes" component={Quote} />
      </Stack.Navigator>
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
