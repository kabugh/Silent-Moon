import * as React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../Themed";
import StaticValues from "../../constants/StaticValues";
import { vh } from "../ViewportUnits";

export default function CourseCard(props: {
  image: NodeRequire;
  title: string;
  subTitle: string;
}) {
  return (
    <View style={styles.recommendation}>
      <Image style={styles.recommendationImage} source={props.image} />
      <View style={styles.recommendationTitleContainer}>
        <Text style={styles.recommendationTitle}>{props.title}</Text>
        <Text style={styles.recommendationSubTitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendation: {
    width: "48%",
    minHeight: "100%",
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
