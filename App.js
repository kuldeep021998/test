import { View } from "react-native"
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./components/navigation/RootNavigation";
import NavigationRouter from "./components/navigation/NavigationRouter";
import Menu from "./components/screens/Menu";
import Maps from "./components/screens/Maps";



export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </View>
  )
}