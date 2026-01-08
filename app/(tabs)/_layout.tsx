import { Stack } from "expo-router";
import React from "react";
import colors from "../../data/styling/colors";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      }}
    >
      <Stack.Screen name="(home)" options={{ title: "Home" }} />
      <Stack.Screen name="[noteId]" options={{ title: "NoteId" }} />
    </Stack>
  );
};

export default HomeLayout;
