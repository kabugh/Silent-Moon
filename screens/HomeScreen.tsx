import * as React from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import Button from "react-native-button";

import CourseCard from "../components/cards/CourseCard";
import PlayCard from "../components/cards/PlayCard";
import Hello from "../components/home/Hello";
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
    category: {
      width: "48%",
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
              key={category.title}
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
      </View>
      <PlayCard
        backgroundImage={require("../assets/images/overlays/clouds.png")}
        backgroundColor={Colors.dark.background}
        color={Colors.light.altText}
        title={"Daily Thoughts"}
        description={"Meditation 3 - 10 min"}
        buttonTitle={"Play"}
        buttonHandler={() => console.log("test")}
      />
      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsTitle}>Recommended for you</Text>
        <View style={styles.recommendations}>
          {/* <Swiper loop={false}> */}
          {recommendations.map((item) => (
            <CourseCard
              key={item.title}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
          {/* </Swiper> */}
        </View>
      </View>
    </ScrollView>
  );
}
