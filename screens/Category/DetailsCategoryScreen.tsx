import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { vh } from "../../components/ViewportUnits";
import Colors from "../../constants/Colors";
import StaticValues from "../../constants/StaticValues";
import useColorScheme from "../../hooks/useColorScheme";

type Props = {
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
      flex: 2,
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
      fontSize: 14,
      fontWeight: "300",
      textTransform: "uppercase",
      marginTop: vh(0.5),
    },
    detailsDescription: {
      fontSize: 16,
      fontWeight: "300",
      marginTop: vh(2),
    },
  });
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
        </View>
      </View>
    </View>
  );
}
