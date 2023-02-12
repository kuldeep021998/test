import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../screens/User";
import Menu from "../screens/Menu";
import Home from "../screens/Home";
import Offers from "../screens/Offers";
import More from "../screens/More";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MCI from 'react-native-vector-icons/Foundation';


export default function NavigationRouter() {

    const Tab = createBottomTabNavigator();

    const customTabBarStyle = {
        activeTintColor: '#0091EA',
        inactiveTintColor: 'gray',
        style: { backgroundColor: '#bdc3c7' },
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#bdc3c7" }}>
            <Tab.Navigator
                activeColor="#fff"
                tabBarOptions={customTabBarStyle}
                shifting="false">
                <Tab.Screen
                    name="Menu"
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Menu',
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={26} />
                        )
                    }}
                    component={Menu} />
                <Tab.Screen
                    name="Offers"
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Offers',
                        tabBarIcon: ({ color }) => (
                            <Icon name="lock" color={color} size={26} />
                        )
                    }}
                    component={Offers} />
                <Tab.Screen
                    name="Home"
                    options={{
                        headerShown: false,
                        tabBarLabel: "",
                        tabBarIcon: ({ color }) => (
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 10, // space from bottombar
                                    height: 80,
                                    width: 68,
                                    borderRadius: 68,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon name="home-circle" color="grey" size={68} />
                            </View>
                        )
                    }}
                    component={Home} />
                <Tab.Screen
                    name="User"
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <Icon name="store" color={color} size={26} />
                        )
                    }}
                    component={User} />
                <Tab.Screen
                    name="More"
                    options={{
                        headerShown: false,
                        tabBarLabel: 'More',
                        tabBarIcon: ({ color }) => (
                            <MCI name="indent-more" color={color} size={26} />
                        )
                    }}
                    component={More} />
            </Tab.Navigator>
        </View>
    )
}



const styles = StyleSheet.create({
    container:
    {
        width: "100%",
        height: "300px",
        overflow: "hidden", /* half circle - top is not visible */
        position: "relative"
    },
    before: {
        content: "",
        position: "absolute",
        top: "0px",
        left: "0px",
        bottom: "0px",
        right: "0px",
        border: "1px solid orange"
    },
    after: {
        content: "",
        position: "absolute",

        /* size */
        width: "200px",
        height: "200px",

        /* center horizontaly */
        left: "50 %",
        marginLeft: "- 100px",

        /* place verticaly */
        top: "-100px",

        borderRadius: "50 %",/* circle magic */

        border: "1px solid orange",
        backgroundColor: " white"
    }

})