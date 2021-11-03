import { StatusBar } from "expo-status-bar";
import React from "react";
import { Home } from "./src/screens/Home";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { AuthProvider } from "./src/contexts/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <Home />
      <StatusBar style="light" backgroundColor="transparent" />
    </AuthProvider>
  );
}
