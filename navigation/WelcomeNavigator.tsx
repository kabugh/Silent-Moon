import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import ChooseTopicScreen from "../screens/Welcome/ChooseTopicScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import { WelcomeParamList } from "../typings/types";

const WelcomeStack = createStackNavigator<WelcomeParamList>();

export default function WelcomeNavigator() {
  return (
    <WelcomeStack.Navigator headerMode="none">
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen name="ChooseTopic" component={ChooseTopicScreen} />
    </WelcomeStack.Navigator>
  );
}
