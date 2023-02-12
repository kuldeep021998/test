import { View, Text, Dimensions, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import MCI from "react-native-vector-icons/Ionicons";
import IC from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo"

const { height, width } = Dimensions.get("window");

export default function More() {
    return (
        <View style={{ margin: height * 0.001 }}>
            <View style={{ margin: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 25, fontWeight: 700, }}>More</Text>
                <Icon name={"shopping-cart"} size={24} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: "#dfe6e9", width: 300, height: 90, borderRadius: 10, position: 'relative' }}>
                    <View style={{ backgroundColor: "#dfe6e9", width: 50, height: 40, borderRadius: 20, position: 'absolute', left: '90%', top: "28%" }}>
                        <View style={{ backgroundColor: '#bdc3c7', width: 70, height: 70, borderRadius: 50, position: 'absolute', top: -15, left: "-500%" }}>
                            <Icon name={"hand-holding-usd"} size={35} style={{ marginTop: 15, marginLeft: 18, borderRadius: 50 }} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 35, marginLeft: "35%" }}>
                        <Text style={{ fontSize: 18 }}>Payment</Text>
                        <Text style={{ fontSize: 18, marginLeft: 5 }}>Details</Text>
                        <Icon name={"angle-right"} size={25} style={{ position: 'absolute', left: "122%", top: " -10%" }} />
                    </View>
                </View>

                <View style={{ backgroundColor: "#dfe6e9", width: 300, height: 90, borderRadius: 10, position: 'relative', marginTop: 20 }}>
                    <View style={{ backgroundColor: "#dfe6e9", width: 50, height: 40, borderRadius: 20, position: 'absolute', left: '90%', top: "28%" }}>
                        <View style={{ backgroundColor: '#bdc3c7', width: 70, height: 70, borderRadius: 50, position: 'absolute', top: -15, left: "-500%" }}>
                            <Icon name={"shopping-bag"} size={35} style={{ marginTop: 15, marginLeft: 20, borderRadius: 50 }} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 35, marginLeft: "22%" }}>
                        <Text style={{ fontSize: 18 }}>My</Text>
                        <Text style={{ fontSize: 18, marginLeft: 5 }}>Orders</Text>
                        <Icon name={"angle-right"} size={25} style={{ position: 'absolute', left: "117%", top: " -10%" }} />
                    </View>
                </View>

                <View style={{ backgroundColor: "#dfe6e9", width: 300, height: 90, borderRadius: 10, position: 'relative', marginTop: 20 }}>
                    <View style={{ backgroundColor: "#dfe6e9", width: 50, height: 40, borderRadius: 20, position: 'absolute', left: '90%', top: "28%" }}>
                        <View style={{ backgroundColor: '#bdc3c7', width: 70, height: 70, borderRadius: 50, position: 'absolute', top: -15, left: "-500%" }}>
                            <MCI name={"notifications"} size={35} style={{ marginTop: 15, marginLeft: 17, borderRadius: 50 }} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 35, marginLeft: "22%" }}>
                        <Text style={{ fontSize: 18, marginLeft: 15 }}>Notifications</Text>
                        <Icon name={"angle-right"} size={25} style={{ position: 'absolute', left: "117%", top: " -10%" }} />
                    </View>
                </View>

                <View style={{ backgroundColor: "#dfe6e9", width: 300, height: 90, borderRadius: 10, position: 'relative', marginTop: 20 }}>
                    <View style={{ backgroundColor: "#dfe6e9", width: 50, height: 40, borderRadius: 20, position: 'absolute', left: '90%', top: "28%" }}>
                        <View style={{ backgroundColor: '#bdc3c7', width: 70, height: 70, borderRadius: 50, position: 'absolute', top: -15, left: "-500%" }}>
                            <IC name={"email"} size={35} style={{ marginTop: 15, marginLeft: 17, borderRadius: 50 }} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 35, marginLeft: "22%" }}>
                        <Text style={{ fontSize: 18, marginLeft: 15 }}>Notifications</Text>
                        <Icon name={"angle-right"} size={25} style={{ position: 'absolute', left: "117%", top: " -10%" }} />
                    </View>
                </View>

                <View style={{ backgroundColor: "#dfe6e9", width: 300, height: 90, borderRadius: 10, position: 'relative', marginTop: 20 }}>
                    <View style={{ backgroundColor: "#dfe6e9", width: 50, height: 40, borderRadius: 20, position: 'absolute', left: '90%', top: "28%" }}>
                        <View style={{ backgroundColor: '#bdc3c7', width: 70, height: 70, borderRadius: 50, position: 'absolute', top: -15, left: "-500%" }}>
                        <Entypo name={"info"} size={35} style={{ marginTop: 15, marginLeft: 17, borderRadius: 50 }} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 35, marginLeft: "22%" }}>
                    <Text style={{ fontSize: 18 }}>About</Text>
                        <Text style={{ fontSize: 18, marginLeft: 5 }}>Us</Text>
                        <Icon name={"angle-right"} size={25} style={{ position: 'absolute', left: "117%", top: " -10%" }} />
                    </View>
                </View>

            </View>
        </View>
    )
}