import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/initech.jpg";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <View style={styles.one}>
        <Image
          source={logo}
          style={{
            height: 50,
            width: 80,
            resizeMode: "stretch",
            marginRight: 15,
          }}
        />
        <Text style={styles.text}>{props.headerDisplay}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 10,
    paddingTop: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  menu: {
    fontSize: 18,
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo: {
    height: 30,
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
  },
  one: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "white",
    padding: 10,
  },
  two: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
  },
});
