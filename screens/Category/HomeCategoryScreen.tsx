import * as React from "react";
import { StyleSheet } from "react-native";

import MasonryGrid from "../../components/cards/MasonryGrid";
import PlayCard from "../../components/cards/PlayCard";
import { Text, View } from "../../components/Themed";
import { vh } from "../../components/ViewportUnits";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomeCategoryScreen({ navigation }: any) {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    category: {
      flex: 1,
      backgroundColor: Colors[colorScheme].background,
    },
    categoryContainer: {
      flex: 1,
      backgroundColor: "transparent",
      padding: vh(4),
    },
    titleContainer: {
      backgroundColor: "transparent",
    },
    title: {
      fontSize: 26,
      fontWeight: "700",
      color: Colors[colorScheme].text,
      textAlign: "center",
    },
    description: {
      fontSize: 16,
      fontWeight: "300",
      marginTop: vh(1),
      textAlign: "center",
    },
  });

  const meditationItems = [
    {
      title: "Test",
      backgroundColor: "#808AFF",
      id: 0,
      flex: 3,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundColor: "#FA6E5A",
      id: 1,
      flex: 2,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundColor: "#FEB18F",
      id: 2,
      flex: 3,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundColor: "#FFCF86",
      id: 3,
      flex: 3,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundColor: "#3F414E",
      id: 4,
      flex: 2,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundColor: "#D9A5B5",
      id: 5,
      flex: 3,
      routeComponent: "chooseTopic",
    },
  ];

  return (
    <View style={styles.category}>
      <View style={styles.categoryContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Meditate</Text>
          <Text style={styles.description}>
            Discover your mind's acrobatics
          </Text>
        </View>
        <PlayCard
          backgroundImage={require("../../assets/images/overlays/clouds.png")}
          backgroundColor="#F1DDCF"
          color={Colors.light.text}
          title={"Daily Thoughts"}
          description={"Meditation 3 - 10 min"}
          buttonTitle={"Play"}
          buttonHandler={() => console.log("test")}
        />
        <MasonryGrid
          navigation={navigation}
          navigationType={"navigate"}
          items={meditationItems}
        />
      </View>
    </View>
  );
}
