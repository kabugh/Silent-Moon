import * as React from "react";
import { Image, StyleSheet, ImageBackground, ScrollView } from "react-native";
import Button from "react-native-button";
// import Swiper from "react-native-swiper";

import Hello from "../components/Home/Hello";
import { Text, View } from "../components/Themed";
import { vh, vw } from "../components/ViewportUnits";
import Colors from "../constants/Colors";
import StaticValues from "../constants/StaticValues";
import useColorScheme from "../hooks/useColorScheme";
import Category from "../typings/Category";
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
      backgroundColor: Colors[colorScheme].background,
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
      resizeMode: "stretch",
      overflow: "hidden",
    },
    gridLessCategoryContent: {
      flex: 1,
      padding: vh(2),
      backgroundColor: "transparent",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: StaticValues.cardBorderRadius,
    },
    playButtonContainer: {
      width: vh(5),
      height: vh(5),
      borderRadius: vh(5) / 2,
      backgroundColor: Colors.light.background,
      alignItems: "center",
      justifyContent: "center",
    },
    playButton: {
      fontSize: 12,
      color: Colors.light.text,
    },
    category: {
      width: "48%",
      // flex: 1,
      borderRadius: StaticValues.cardBorderRadius,
      backgroundColor: Colors[colorScheme].primary,
      position: "relative",
      justifyContent: "space-between",
      padding: vh(2),
      overflow: "hidden",
    },
    categoryImage: {
      position: "absolute",
      top: 0,
      right: -5,
      width: vw(20),
      height: vh(8),
    },
    categoryTitleContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: "600",
    },
    categoryType: {
      fontSize: 12,
    },
    categoryButtonContainer: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      overflow: "hidden",
      borderRadius: StaticValues.cardBorderRadius,
      backgroundColor: Colors.light.background,
    },
    categoryButton: {
      fontSize: 12,
      textTransform: "uppercase",
      color: Colors.light.text,
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
      width: "100%",
      marginTop: vh(2),
      flexDirection: "row",
      justifyContent: "space-between",
      height: vh(20),
    },
    recommendation: {
      width: "48%",
      height: "100%",
    },
    recommendationImage: {
      width: "100%",
      borderRadius: StaticValues.cardBorderRadius,
      alignItems: "center",
      justifyContent: "center",
      resizeMode: "cover",
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

  const pickedCategories: Category[] = [
    {
      title: "Basics",
      type: "Course",
      appearance: {
        backgroundColor: "#8e97fd",
        color: Colors[colorScheme].text,
        image: "",
      },
      duration: "3-5 min",
    },
    {
      title: "Advanced",
      type: "Course",
      appearance: {
        backgroundColor: "#ffdb9d",
        color: Colors.dark.altText,
        image: "",
      },
      duration: "4-6 min",
    },
  ];

  const recommendations: Recommendation[] = [
    {
      title: "Focus",
      subTitle: "Meditation 5 - 10 min",
      image: require("../assets/images/illustrations/focus.png"),
    },
    {
      title: "Happiness",
      subTitle: "Meditation 3 - 5 min",
      image: require("../assets/images/illustrations/happiness.png"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Hello name={user.name} />
      <View style={styles.pickedCategoriesContainer}>
        <View style={styles.categoryGrid}>
          {pickedCategories.map((category) => (
            <View
              style={[
                styles.category,
                { backgroundColor: category.appearance.backgroundColor },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../assets/images/illustrations/basics.png")}
              />
              <View style={styles.categoryTitleContainer}>
                <Text
                  style={[
                    styles.categoryTitle,
                    { color: category.appearance.color },
                  ]}
                >
                  {category.title}
                </Text>
                <Text
                  style={[
                    styles.categoryType,
                    { color: category.appearance.color },
                  ]}
                >
                  {category.type}
                </Text>
              </View>
              <View style={styles.categoryDescriptionContainer}>
                <Text
                  style={[
                    styles.categoryDuration,
                    { color: category.appearance.color },
                  ]}
                >
                  {category.duration}
                </Text>
                <Button
                  title="start"
                  containerStyle={styles.categoryButtonContainer}
                  disabledContainerStyle={{ backgroundColor: "grey" }}
                  style={styles.categoryButton}
                  onPress={() => console.log("test")}
                >
                  Start
                </Button>
              </View>
            </View>
          ))}
        </View>
        <ImageBackground
          source={require("../assets/images/overlays/clouds.png")}
          style={styles.gridLessCategory}
        >
          <View style={styles.gridLessCategoryContent}>
            <View style={[styles.categoryTitleContainer, { flex: 3 }]}>
              <Text style={[styles.categoryTitle, { color: Colors.dark.text }]}>
                Daily Thoughts
              </Text>
              <Text
                style={[
                  styles.categoryType,
                  { paddingTop: 4, color: Colors.dark.text },
                ]}
              >
                Meditation 3 - 10 min
              </Text>
            </View>
            <View
              style={[
                styles.categoryDescriptionContainer,
                { justifyContent: "flex-end", flex: 1 },
              ]}
            >
              <Button
                title="play"
                containerStyle={styles.playButtonContainer}
                style={styles.playButton}
                onPress={() => console.log("test")}
              >
                Play
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsTitle}>Recommended for you</Text>
        <View style={styles.recommendations}>
          {/* <Swiper loop={false}> */}
          {recommendations.map((item) => (
            <View key={item.title} style={styles.recommendation}>
              <Image style={styles.recommendationImage} source={item.image} />
              <View style={styles.recommendationTitleContainer}>
                <Text style={styles.recommendationTitle}>{item.title}</Text>
                <Text style={styles.recommendationSubTitle}>
                  {item.subTitle}
                </Text>
              </View>
            </View>
          ))}
          {/* </Swiper> */}
        </View>
      </View>
    </ScrollView>
  );
}
