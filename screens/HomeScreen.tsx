import * as React from "react";
import { Image, Button, StyleSheet } from "react-native";

import Hello from "../components/Home/Hello";
import { Text, View } from "../components/Themed";
import { vh, vw } from "../components/ViewportUnits";
import Colors from "../constants/Colors";
import StaticValues from "../constants/StaticValues";
import useColorScheme from "../hooks/useColorScheme";
import Recommendation from "../typings/Recommendation";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const user = {
    name: "test",
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: vh(4),
    },
    pickedCategoriesContainer: {},
    categoryGrid: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: vh(20),
    },
    gridLessCategory: {
      width: "100%",
      height: vh(10),
      marginTop: vh(2),
      borderRadius: StaticValues.cardBorderRadius,
      backgroundColor: Colors.dark.background,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: vh(2),
    },
    category: {
      width: "48%",
      // flex: 1,
      borderRadius: StaticValues.cardBorderRadius,
      backgroundColor: Colors[colorScheme].primary,
      position: "relative",
      justifyContent: "space-between",
      padding: vh(2),
    },
    categoryImage: {
      position: "absolute",
      top: 0,
      right: 0,
    },
    categoryTitleContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: "500",
    },
    categoryType: {
      fontSize: 12,
    },
    categoryDescriptionContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
    },
    categoryDuration: {
      fontSize: 12,
    },
    recommendationsContainer: {
      marginTop: vh(4),
    },
    recommendationsTitle: {
      fontSize: 22,
      fontWeight: "bold",
    },
    recommendations: {
      marginTop: vh(2),
      flexDirection: "row",
      height: vh(20),
    },
    recommendation: {
      flex: 1,
    },
    recommendationImage: {
      flex: 2,
      height: "30%",
      borderRadius: StaticValues.cardBorderRadius,
    },
    recommendationTitleContainer: {
      flex: 1,
      paddingVertical: vh(1),
    },
    recommendationTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    recommendationSubTitle: {
      fontSize: 12,
    },
  });

  const recommendations: Recommendation[] = [
    {
      image: "",
      title: "Focus",
      subTitle: "Meditation 5 - 10 min",
    },
    {
      image: "",
      title: "Happiness",
      subTitle: "Meditation 3 - 5 min",
    },
  ];

  return (
    <View style={styles.container}>
      <Hello name={user.name} />
      <View style={styles.pickedCategoriesContainer}>
        <View style={styles.categoryGrid}>
          <View style={styles.category}>
            <Image
              style={styles.categoryImage}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <View style={styles.categoryTitleContainer}>
              <Text style={styles.categoryTitle}>Basics</Text>
              <Text style={styles.categoryType}>Course</Text>
            </View>
            <View style={styles.categoryDescriptionContainer}>
              <Text style={styles.categoryDuration}>3 - 10 min</Text>
              <Button title="start" onPress={() => console.log("test")}>
                Start
              </Button>
            </View>
          </View>
          <View style={styles.category}>
            {/* <Image></Image> */}
            <View style={styles.categoryTitleContainer}>
              <Text style={styles.categoryTitle}>Advanced</Text>
              <Text style={styles.categoryType}>Music</Text>
            </View>
            <View style={styles.categoryDescriptionContainer}>
              <Text style={styles.categoryDuration}>3 - 10 min</Text>
              <Button title="start" onPress={() => console.log("test")}>
                Start
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.gridLessCategory}>
          <View style={[styles.categoryTitleContainer, { flex: 0 }]}>
            <Text
              style={[
                styles.categoryTitle,
                { color: Colors[colorScheme].altText },
              ]}
            >
              Daily Thoughts
            </Text>
            <Text
              style={[
                styles.categoryType,
                { paddingTop: 4, color: Colors[colorScheme].altText },
              ]}
            >
              Meditation 3 - 10 min
            </Text>
          </View>
          <View
            style={[
              styles.categoryDescriptionContainer,
              { alignItems: "flex-end" },
            ]}
          >
            <Button title="start" onPress={() => console.log("test")}>
              Start
            </Button>
          </View>
        </View>
      </View>
      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsTitle}>Recommended for you</Text>
        <View style={styles.recommendations}>
          {recommendations.map((item) => (
            <View style={styles.recommendation}>
              {/* <Image
                style={styles.recommendationImage}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              /> */}
              <View
                style={[
                  styles.recommendationImage,
                  { backgroundColor: "salmon" },
                ]}
              />
              <View style={styles.recommendationTitleContainer}>
                <Text style={styles.recommendationTitle}>{item.title}</Text>
                <Text style={styles.recommendationSubTitle}>
                  {item.subTitle}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
