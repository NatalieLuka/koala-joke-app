import { StyleSheet, Pressable, View, Text } from "react-native";
import { globalStyles } from "../styles/gobalStyles";
import { Link, router, Slot, Tabs } from "expo-router";
import { COLORS } from "../styles/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5, Fontisto } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="(koalas)"
        options={{
          title: "Koalas",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="koala" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="(jokes)"
        options={{
          title: "Jokes",
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="laugh-squint" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
