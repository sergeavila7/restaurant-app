import React, { useEffect } from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import FirebaseState from "./context/firebase/firebaseState";
import OrderState from "./context/order/orderState";
import ButtonSummary from "@/components/ui/buttonSummary";

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
          <OrderState>
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
              <Stack.Screen
                name="menu"
                options={{
                  title: "Nuestro Menu",
                  headerShown: true,
                  headerRight: (props) => <ButtonSummary />,
                }}
              />
              <Stack.Screen
                name="newOrder"
                options={{ title: "Nueva Orden", headerShown: true }}
              />
              <Stack.Screen
                name="dishDetail"
                options={{ title: "Detalles Platillo", headerShown: true }}
              />
              <Stack.Screen
                name="dishForm"
                options={{ title: "Ordenar Platillo", headerShown: true }}
              />
              <Stack.Screen
                name="orderSummary"
                options={{ title: "Resumen Pedido", headerShown: true }}
              />
              <Stack.Screen
                name="orderProgress"
                options={{ title: "Progreso Pedido", headerShown: true }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </OrderState>
        </FirebaseState>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
