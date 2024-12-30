import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#FFDA00" },
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="newOrder"
        options={{
          title: "New Order",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="list.bullet" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dishDetail"
        options={{
          title: "Dish Detail",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="info.circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dishForm"
        options={{
          title: "Dish Form",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="pencil" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orderSummary"
        options={{
          title: "Order Summary",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="checkmark.circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orderProgress"
        options={{
          title: "Order Progress",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="clock" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
