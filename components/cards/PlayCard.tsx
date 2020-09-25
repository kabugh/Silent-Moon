import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Button from "react-native-button";

import { View, Text } from "../Themed";
import { vh } from "../ViewportUnits";
import StaticValues from "../../constants/StaticValues";
import Colors from "../../constants/Colors";
import PlayCardModel from "../../typings/PlayCardModel";

export default function PlayCard(props: PlayCardModel) {
  const styles = StyleSheet.create({
    playCard: {
      width: "100%",
      height: vh(10),
      marginTop: vh(2),
      borderRadius: StaticValues.cardBorderRadius,
      backgroundColor: Colors.dark.background,
      resizeMode: "stretch",
      overflow: "hidden",
    },
    playCardContainer: {
      flex: 1,
      padding: vh(2),
      backgroundColor: "transparent",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: StaticValues.cardBorderRadius,
    },
    playCardTitleContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    playCardTitle: {
      fontSize: 18,
      fontWeight: "600",
    },
    playCardType: {
      fontSize: 12,
    },
    playCardDescription: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
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
  });
  return (
    <ImageBackground
      source={props.backgroundImage}
      style={[styles.playCard, { backgroundColor: props.backgroundColor }]}
    >
      <View style={styles.playCardContainer}>
        <View style={[styles.playCardTitleContainer, { flex: 3 }]}>
          <Text style={[styles.playCardTitle, { color: props.color }]}>
            {props.title}
          </Text>
          <Text
            style={[styles.playCardType, { paddingTop: 4, color: props.color }]}
          >
            {props.description}
          </Text>
        </View>
        <View
          style={[
            styles.playCardDescription,
            { justifyContent: "flex-end", flex: 1 },
          ]}
        >
          <Button
            title="play"
            containerStyle={styles.playButtonContainer}
            style={styles.playButton}
            onPress={() => props.buttonHandler}
          >
            {props.buttonTitle}
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}
