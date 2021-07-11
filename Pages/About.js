import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import img from "../assets/tech.jpg";

const blurb1 =
  "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.";
const blurb2 =
  "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.";
const blurb3 =
  "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.";

export default function About() {
  return (
    <View style={styles.container} >
      <ScrollView style={styles.scroll}>
        <Image source={require("../assets/initech.jpg")} style={styles.image} />
        <Text style={styles.heading}>We Are Different!</Text>
        <Text style={styles.text}>{blurb1}</Text>
        <Image source={require("../assets/tech.jpg")} style={styles.image} />
        <Text style={styles.text}>{blurb2}</Text>
        <Image source={require("../assets/tech.jpg")} style={styles.image} />
        <Text style={styles.text}>{blurb3}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70
  },
  scroll: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center'
  }, 
  image: {
    height: 300,
    width: "100%",
    resizeMode: "stretch",
    marginBottom: 50,
  },
  heading: {
    fontWeight: "bold",
    paddingTop: 5,
  },
  text: {
    marginBottom: 10
  },
});
