import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { getToken } from "@/api/storage";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "@/data/styling/colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
export default function RootLayout() {
  const queryClient = new QueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false); //actual state

  const checkToken = async () => {
    //1. check if token is exists ? setIsAuthenticated(true)
    const token = await getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    checkToken();
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
        <QueryClientProvider client={queryClient}>
          <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(tabs)" />
            </Stack>
          </AuthContext.Provider>
        </QueryClientProvider>
        <StatusBar barStyle={"light-content"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
