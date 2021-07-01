import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Quote from './Pages/Quote';

const Stacck = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Image source={require("./assets/initech.jpg")} style={styles.image}/>
      <Stack.Navigator initialRouteName="Initech">
        <Stack.Screen name="Initech" component={Home}/>
        <Stack.Screen name="News" component={News}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Quotes" component={Quote}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Image source={require("./assets/initech.jpg")} style={styles.image}/>
    //   <Text>Open up App.js to start working on your app, Abigayle!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 70
  },
  image: {
    height: 200,
    width: 300,
    resizeMode: 'stretch',
    marginBottom: 50
  }
});
