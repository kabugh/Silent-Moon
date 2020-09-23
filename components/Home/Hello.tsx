import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../Themed";
import { vh } from "../ViewportUnits";

export default function Hello(props: { name: string }) {
  const greetings = ["Hey", "Good morning", "Hello", "Welcome"];
  const descriptions = [
    "How are you?",
    "Good to see you here",
    "Wish you a good day",
  ];

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const randomText = (array: string[]) => {
    const max = array.length;
    const randomIndex = getRandomInt(0, max);
    return array[randomIndex];
  };

  const greeting = randomText(greetings);
  const description = randomText(descriptions);

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {greeting}, {props.name}
      </Text>
      <Text style={styles.subTitle}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "flex-start",
    paddingBottom: vh(3),
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "300",
    marginTop: 4,
  },
});
