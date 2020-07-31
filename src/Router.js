import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import Home from "./containers/Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let size;
            if (route.name === "Home") {
              size = focused ? 28 : 24;
              return <Entypo name="home" size={size} color={color} />;
            } else if (route.name === "Bookmark") {
              size = focused ? 28 : 24;
              return <FontAwesome name="bookmark" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Bookmark" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
