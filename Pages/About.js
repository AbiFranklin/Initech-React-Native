import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/initech.jpg")} style={styles.image} />
      <Text>This will be the About Page!</Text>
    </View>
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
