import * as React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

import MasonryGrid from "../../components/cards/MasonryGrid";
import PlayCard from "../../components/cards/PlayCard";
import { Text, View } from "../../components/Themed";
import { vh } from "../../components/ViewportUnits";
import Colors from "../../constants/Colors";
import StaticValues from "../../constants/StaticValues";
import useColorScheme from "../../hooks/useColorScheme";
import CourseType from "../../typings/CourseType";

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
    courseTypePicker: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: vh(2),
    },
    courseType: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    iconWrapper: {
      width: 48,
      height: 48,
      borderRadius: StaticValues.cardBorderRadius,
      backgroundColor: "#A0A3B1",
      marginBottom: vh(1),
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      resizeMode: "contain",
      width: 24,
      height: 24,
    },
    courseTypeTitle: {
      textTransform: "capitalize",
    },
  });

  const meditationItems = [
    {
      title: "Test",
      backgroundImage: "#808AFF",
      courseType: "anxious",
      id: 0,
      flex: 3,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundImage: "#FA6E5A",
      courseType: "fav",
      id: 1,
      flex: 2,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundImage: "#FEB18F",
      courseType: "sleep",
      id: 2,
      flex: 3,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundImage: "#FFCF86",
      courseType: "anxious",
      id: 3,
      flex: 3,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundImage: "#3F414E",
      courseType: "sleep",
      id: 4,
      flex: 2,
      routeComponent: "DetailsCategoryScreen",
    },
    {
      title: "Test",
      backgroundImage: "#D9A5B5",
      courseType: "fav",
      id: 5,
      flex: 3,
      routeComponent: "DetailsCategoryScreen",
    },
  ];

  const courseTypes: CourseType[] = [
    {
      title: "all",
      icon: require("../../assets/images/icons/windmill/windmill.png"),
    },
    {
      title: "fav",
      icon: require("../../assets/images/icons/heart/heart.png"),
    },
    {
      title: "anxious",
      icon: require("../../assets/images/icons/sadFace/sadFace.png"),
    },
    {
      title: "sleep",
      icon: require("../../assets/images/icons/moon/moon.png"),
    },
  ];

  const [currentCourseType, setCurrentCourseType] = React.useState<
    CourseType["title"]
  >("all");

  return (
    <View style={styles.category}>
      <View style={styles.categoryContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Meditate</Text>
          <Text style={styles.description}>
            Learn how to soothen your mind with our handpicked meditation
            playlists.
          </Text>
        </View>
        <View style={styles.courseTypePicker}>
          {courseTypes.map((item) => (
            <Pressable
              key={item.title}
              onPress={() => setCurrentCourseType(item.title)}
              style={styles.courseType}
            >
              <View
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor:
                      item.title === currentCourseType
                        ? Colors.dark.primary
                        : "#A0A3B1",
                  },
                ]}
              >
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text style={styles.courseTypeTitle}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
        <PlayCard
          backgroundImage={require("../../assets/images/overlays/clouds2.png")}
          backgroundColor="#F1DDCF"
          color={Colors.light.text}
          title={"Daily Calm"}
          description={"30 min Pause practise"}
          buttonTitle={"Play"}
          buttonHandler={() => console.log("test")}
        />
        <MasonryGrid
          navigation={navigation}
          navigationType={"navigate"}
          items={meditationItems.filter((item) =>
            currentCourseType === "all"
              ? true
              : item.courseType === currentCourseType
          )}
        />
      </View>
    </View>
  );
}
