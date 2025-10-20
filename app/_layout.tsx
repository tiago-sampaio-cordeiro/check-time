import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" color={"#501be0ff"} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="calculateHours"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="calculate" size={24} color="#501be0ff" />
          ),
        }}
      />
      <Tabs.Screen
        name="listTime"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              size={24}
              color="#501be0ff"
            />
          ),
        }}
      />
    </Tabs>
  );
}
