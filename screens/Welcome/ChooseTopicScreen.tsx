import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { vh } from "../../components/ViewportUnits";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import MasonryGrid from "../../components/cards/MasonryGrid";
import MasonryGridItem from "../../typings/MasonryGridItem";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ChooseTopicScreen({ navigation }: any) {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    chooseTopicContainer: {
      flex: 1,
      backgroundColor: Colors[colorScheme].background,
    },
    chooseTopicContent: {
      flex: 1,
      backgroundColor: "transparent",
      paddingTop: vh(10),
      paddingHorizontal: vh(4),
    },
    chooseTopicTitleContainer: {
      backgroundColor: "transparent",
    },
    chooseTopicTitle: {
      fontSize: 34,
      fontWeight: "700",
      textAlign: "left",
      color: Colors[colorScheme].text,
    },
    chooseTopicSubTitle: {
      fontSize: 30,
      fontWeight: "200",
      textAlign: "left",
      color: Colors[colorScheme].text,
    },
    chooseTopicDescription: {
      fontSize: 16,
      marginTop: vh(4),
    },
  });

  const topics: MasonryGridItem[] = [
    {
      backgroundImage: "#808AFF",
      id: 0,
      flex: 3,
      routeComponent: "BottomTabNavigator",
    },
    {
      backgroundImage: "#FA6E5A",
      id: 1,
      flex: 2,
      routeComponent: "BottomTabNavigator",
    },
    {
      backgroundImage: "#FEB18F",
      id: 2,
      flex: 3,
      routeComponent: "BottomTabNavigator",
    },
    {
      backgroundImage: "#FFCF86",
      id: 3,
      flex: 3,
      routeComponent: "BottomTabNavigator",
    },
    {
      backgroundImage: "#3F414E",
      id: 4,
      flex: 2,
      routeComponent: "BottomTabNavigator",
    },
    {
      backgroundImage: "#D9A5B5",
      id: 5,
      flex: 3,
      routeComponent: "BottomTabNavigator",
    },
  ];

  return (
    <View style={styles.chooseTopicContainer}>
      <View style={styles.chooseTopicContent}>
        <View style={styles.chooseTopicTitleContainer}>
          <Text style={styles.chooseTopicTitle}>What brings you</Text>
          <Text style={styles.chooseTopicSubTitle}>to Silent Moon</Text>
          <Text
            style={[styles.chooseTopicSubTitle, styles.chooseTopicDescription]}
          >
            Choose your desired goal to focus on
          </Text>
        </View>
        <MasonryGrid
          navigation={navigation}
          navigationType={"navigate"}
          items={topics}
        />
      </View>
    </View>
  );
}
