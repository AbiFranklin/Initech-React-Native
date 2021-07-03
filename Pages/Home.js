import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/initech.jpg")} style={styles.image} />
      <Text>This will be the Home Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 90,
  },
  image: {
    height: 200,
    width: 300,
    resizeMode: "stretch",
    marginBottom: 50,
  },
});
