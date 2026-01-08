import { deleteToken } from "@/api/storage";
import colors from "../../../data/styling/colors";
import { useRouter, Stack } from "expo-router";
import React, { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const HomeLayout = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const router = useRouter();

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
      <Stack.Screen
        name="home"
        options={{
          title: "Home",
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  await deleteToken();
                  setIsAuthenticated(false);
                  router.push("/(auth)");
                }}
              >
                <SimpleLineIcons name="logout" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen name="[noteId]" options={{ title: "NoteId" }} />
    </Stack>
  );
};

export default HomeLayout;
