import React, { useEffect } from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import FirebaseState from "./context/firebase/firebaseState";
import OrdersState from "./context/orders/ordersState";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === "light" ? DefaultTheme : DarkTheme}>
        <FirebaseState>
          <OrdersState>
            <Stack
              screenOptions={{
                headerStyle: { backgroundColor: "#EAB308" },
                headerTitleStyle: { fontWeight: "bold" },
              }}
            >
              <Stack.Screen
                name="index"
                options={{
                  title: "Inicio",
                  headerShown: true,
                }}
              />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </OrdersState>
        </FirebaseState>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
