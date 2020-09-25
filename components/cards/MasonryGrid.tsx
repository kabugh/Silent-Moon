import * as React from "react";
import { StyleSheet, ScrollView, Pressable } from "react-native";

import { View } from "../Themed";
import { vh, vw } from "../ViewportUnits";
import StaticValues from "../../constants/StaticValues";
import MasonryGridItem from "../../typings/MasonryGridItem";

export default function MasonryGrid(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
  navigationType: "replace" | "navigate";
  items: MasonryGridItem[];
}) {
  const styles = StyleSheet.create({
    cardsContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: vh(2),
    },
    halfContainer: {
      flex: 1,
    },
    cardItem: {
      flex: 1,
      borderRadius: StaticValues.cardBorderRadius,
      marginTop: vh(2),
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.cardsContainer}>
      <View style={[styles.halfContainer, { marginRight: vw(2) }]}>
        {props.items
          .filter((_, i) => i % 2 === 0)
          .map((item) => (
            <Pressable
              key={item.id}
              onPress={() =>
                props.navigationType === "replace"
                  ? props.navigation.replace(item.routeComponent)
                  : props.navigation.navigate(item.routeComponent)
              }
              style={[
                styles.cardItem,
                {
                  backgroundColor: item.backgroundColor,
                  flex: item.flex,
                },
              ]}
            >
              <View />
            </Pressable>
          ))}
      </View>
      <View style={[styles.halfContainer, { marginLeft: vw(2) }]}>
        {props.items
          .filter((_, i) => i % 2 !== 0)
          .map((item) => (
            <Pressable
              key={item.id}
              onPress={() =>
                // props.navigationType === "replace"
                //   ? props.navigation.replace(item.routeComponent)
                //   : props.navigation.navigate(item.routeComponent)
                props.navigation.navigate(item.routeComponent)
              }
              style={[
                styles.cardItem,
                {
                  backgroundColor: item.backgroundColor,
                  flex: item.flex,
                },
              ]}
            >
              <View />
            </Pressable>
          ))}
      </View>
    </ScrollView>
  );
}
