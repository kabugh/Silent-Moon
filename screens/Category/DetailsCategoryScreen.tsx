import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";

import CourseCard from "../../components/cards/CourseCard";
import { Text, View } from "../../components/Themed";
import { vh } from "../../components/ViewportUnits";
import Colors from "../../constants/Colors";
import StaticValues from "../../constants/StaticValues";
import useColorScheme from "../../hooks/useColorScheme";
import Recommendation from "../../typings/Recommendation";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
  route: {
    params: {
      backgroundImage: string;
      title: string;
      courseType: string;
      description: string;
    };
  };
};

export default function DetailsCategoryScreen(props: Props) {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    detailsCategory: {
      flex: 1,
      backgroundColor: Colors[colorScheme].background,
    },
    detailsHeader: {
      flex: 1,
      padding: vh(4),
      backgroundColor: Colors[colorScheme].background,
      borderBottomLeftRadius: StaticValues.cardBorderRadius * 2,
      borderBottomRightRadius: StaticValues.cardBorderRadius * 2,
    },
    detailsContainer: {
      flex: 3,
      backgroundColor: "transparent",
      padding: vh(4),
    },
    detailsTitleContainer: {
      flex: 1,
      backgroundColor: "transparent",
      paddingBottom: vh(2),
    },
    detailsTitle: {
      fontSize: 30,
      fontWeight: "700",
    },
    detailsCourseType: {
      fontSize: 12,
      fontWeight: "400",
      textTransform: "uppercase",
      marginTop: vh(0.5),
    },
    detailsDescription: {
      fontSize: 14,
      fontWeight: "200",
      marginVertical: vh(3),
    },
    statisticsContainer: {
      backgroundColor: "transparent",
      flexDirection: "row",
    },
    statisticsItem: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
      alignItems: "center",
    },
    statisticsText: {
      fontSize: 12,
      fontWeight: "400",
      marginLeft: 10,
    },
    recommendationsContainer: {
      flex: 1,
    },
    recommendations: {
      width: "100%",
      marginTop: vh(2),
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  const statisticsItems = [
    {
      value: 41256,
      text: "favourites",
      icon: "ios-heart",
    },
    {
      value: 17851,
      text: "views",
      icon: "ios-headset",
    },
  ];

  const recommendations: Recommendation[] = [
    {
      title: "Focus",
      subTitle: "Meditation 5 - 10 min",
      image: require("../../assets/images/illustrations/focus.png"),
    },
    {
      title: "Happiness",
      subTitle: "Meditation 3 - 5 min",
      image: require("../../assets/images/illustrations/happiness.png"),
    },
  ];

  // const props = navigation.

  React.useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Updated!",
      headerStyle: {
        backgroundColor: props.route.params.backgroundImage,
      },
    });
  });

  const RecommendationsView = () => (
    <View style={styles.recommendationsContainer}>
      <Text style={{ ...styles.detailsTitle, fontSize: 18 }}>Related</Text>
      <View style={styles.recommendations}>
        {recommendations.map((item) => (
          <CourseCard
            key={item.title}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.detailsCategory}>
      <View
        style={[
          styles.detailsHeader,
          { backgroundColor: props.route.params.backgroundImage },
        ]}
      >
        {/* <Button /> */}
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsTitleContainer}>
          <Text style={styles.detailsTitle}>{props.route.params.title}</Text>
          <Text style={styles.detailsCourseType}>
            {props.route.params.courseType}
          </Text>
          <Text style={styles.detailsDescription}>
            {props.route.params.description}
          </Text>
          <View style={styles.statisticsContainer}>
            {statisticsItems.map((item) => (
              <View key={item.icon} style={styles.statisticsItem}>
                <Ionicons
                  name={item.icon}
                  color={props.route.params.backgroundImage}
                  size={24}
                />
                <Text style={styles.statisticsText}>
                  {item.value} {item.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <RecommendationsView />
      </View>
    </View>
  );
}
