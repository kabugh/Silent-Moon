import * as React from "react";
import { StyleSheet, ScrollView, Pressable } from "react-native";

import { Text, View } from "../../components/Themed";
import { vh, vw } from "../../components/ViewportUnits";
import Colors from "../../constants/Colors";
import StaticValues from "../../constants/StaticValues";
import useColorScheme from "../../hooks/useColorScheme";

export default function ChooseTopicScreen({ navigation }) {
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
    topicsContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: vh(2),
    },
    halfContainer: {
      flex: 1,
    },
    topicItem: {
      flex: 1,
      borderRadius: StaticValues.cardBorderRadius,
      marginTop: vh(2),
    },
  });

  const topics = [
    {
      backgroundColor: "#808AFF",
      id: 0,
      flex: 3,
    },
    {
      backgroundColor: "#FA6E5A",
      id: 1,
      flex: 2,
    },
    {
      backgroundColor: "#FEB18F",
      id: 2,
      flex: 3,
    },
    {
      backgroundColor: "#FFCF86",
      flex: 3,
    },
    {
      backgroundColor: "#3F414E",
      id: 4,
      flex: 2,
    },
    {
      backgroundColor: "#D9A5B5",
      id: 4,
      flex: 3,
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
        <ScrollView contentContainerStyle={styles.topicsContainer}>
          <View style={[styles.halfContainer, { marginRight: vw(2) }]}>
            {topics
              .filter((_, i) => i % 2 === 0)
              .map((topic) => (
                <Pressable
                  key={topic.id}
                  onPress={() => navigation.replace("BottomTabNavigator")}
                  style={[
                    styles.topicItem,
                    {
                      backgroundColor: topic.backgroundColor,
                      flex: topic.flex,
                    },
                  ]}
                >
                  <View />
                </Pressable>
              ))}
          </View>
          <View style={[styles.halfContainer, { marginLeft: vw(2) }]}>
            {topics
              .filter((_, i) => i % 2 !== 0)
              .map((topic) => (
                <Pressable
                  key={topic.id}
                  onPress={() => navigation.replace("BottomTabNavigator")}
                  style={[
                    styles.topicItem,
                    {
                      backgroundColor: topic.backgroundColor,
                      flex: topic.flex,
                    },
                  ]}
                >
                  <View />
                </Pressable>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
