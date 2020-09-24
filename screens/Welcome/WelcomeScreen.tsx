import * as React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import Button from "react-native-button";

import { Text, View } from "../../components/Themed";
import { vh, vw } from "../../components/ViewportUnits";
import Colors from "../../constants/Colors";
import StaticValues from "../../constants/StaticValues";
import useColorScheme from "../../hooks/useColorScheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WelcomeScreen({ navigation }: any) {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    welcomeContainer: {
      flex: 1,
      backgroundColor: Colors[colorScheme].primary,
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      maxWidth: vw(35),
      resizeMode: "contain",
      marginVertical: vh(4),
    },
    introContainer: {
      backgroundColor: "transparent",
      paddingHorizontal: vw(10),
    },
    introTitleContainer: {
      textAlign: "center",
      backgroundColor: "transparent",
    },
    introTitle: {
      fontSize: 34,
      fontWeight: "700",
      textAlign: "center",
      color: Colors.light.altText,
    },
    introSubTitle: {
      fontSize: 30,
      fontWeight: "200",
      textAlign: "center",
      color: Colors.light.altText,
    },
    introDescription: {
      marginTop: vh(4),
      fontSize: 16,
      fontWeight: "300",
      textAlign: "center",
      color: Colors.light.altText,
    },
    bgImage: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingVertical: vh(10),
    },
    getStartedContainer: {
      paddingVertical: vh(2),
      paddingHorizontal: vw(20),
      overflow: "hidden",
      borderRadius: StaticValues.cardBorderRadius * 2,
      backgroundColor: Colors.light.background,
    },
    getStartedButton: {
      fontSize: 16,
      fontWeight: "600",
      textTransform: "uppercase",
      color: Colors.light.text,
    },
  });

  return (
    <View style={styles.welcomeContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo/logoWhite.png")}
      />
      <View style={styles.introContainer}>
        <View style={styles.introTitleContainer}>
          <Text style={styles.introTitle}>Hi Test, Welcome</Text>
          <Text style={styles.introSubTitle}>to Silent Moon</Text>
        </View>
        <Text style={styles.introDescription}>
          Explore the app and soothen your mind with all kinds of curation
        </Text>
      </View>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/illustrations/welcome/welcome.png")}
      >
        <Button
          style={styles.getStartedButton}
          containerStyle={styles.getStartedContainer}
          onPress={() => navigation.navigate("ChooseTopic")}
        >
          get started
        </Button>
      </ImageBackground>
    </View>
  );
}
