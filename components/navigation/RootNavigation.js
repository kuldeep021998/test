import React from "react";
import Home from "../screens/Home"
import Reset from "../screens/Reset";
import Otp from "../screens/Otp";
import NewPassword from "../screens/NewPassword";
import Feature from "../screens/Feature";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Dimensions, View, Image, Text } from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";

const { height, width } = Dimensions.get("window");

export default function RootNavigation() {

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const ProjectDrawer = () => {
        return (
            <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        )
    }

    const CustomDrawer = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', margin: height * 0.01, marginBottom: 20 }}>
                    <Image source={require("../assets/mine.jpg")} style={{ resizeMode: "contain", width: 100, height: 100, borderRadius: 100 }} />
                    <Text>KULDEEP</Text>
                    <Text>+91 7415179875</Text>
                    <Text>ks@gmail.com</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="My Profile"
                    icon={() => <MCI name={"home-city"} size={20} />}
                />
                <DrawerItem
                    label="Setting"
                    icon={() => <MCI name={"account-settings"} size={20} />}
                />
                <DrawerItem
                    label="Logout"
                    icon={() => <MCI name={"logout"} size={20} />}
                />
            </DrawerContentScrollView>
        )
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={ProjectDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Reset" component={Reset} />
            <Stack.Screen name="Feature" component={Feature} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
        </Stack.Navigator>
    )
}