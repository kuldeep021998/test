import { View } from "react-native"
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}