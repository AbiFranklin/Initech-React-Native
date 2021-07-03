import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as RootNavigation from "./rootNavigation";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate("Initech")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => RootNavigation.navigate("News")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>News</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => RootNavigation.navigate("Quotes")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Quotes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate("About")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    flexDirection: "row",
    height: 80,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {},
});
