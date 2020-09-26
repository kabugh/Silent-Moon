import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import DetailsCategoryScreen from "../screens/Category/DetailsCategoryScreen";
import HomeCategoryScreen from "../screens/Category/HomeCategoryScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  BottomTabParamList,
  HomeParamList,
  CategoryParamList,
  ProfileParamList,
} from "../typings/types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Category"
        component={CategoryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-heart" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-contact" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Silent Moon" }}
      />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createStackNavigator<CategoryParamList>();

function CategoryNavigator() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="HomeCategoryScreen"
        component={HomeCategoryScreen}
        options={{ headerTitle: "Category" }}
      />
      <CategoryStack.Screen
        name="DetailsCategoryScreen"
        component={DetailsCategoryScreen}
        options={{ headerTitle: "Details" }}
      />
    </CategoryStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
}
