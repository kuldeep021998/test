import { View, Text, Dimensions, Image } from "react-native";
import Input from "../uicomponent/Input";
import Icon from "react-native-vector-icons/FontAwesome5";

const { height, width } = Dimensions.get("window");

export default function MenuSub() {
    return (
        <View style={{ margin: height * 0.001, flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Input iconName={"search1"} placeholder="Search Food" />
            </View>
            <View style={{ width: "30%", height: "80%", backgroundColor: '#EE5A24', marginTop: 15, borderTopRightRadius: 50, borderBottomEndRadius: 50, justifyContent: 'center', elevation: 3 }}>
                <View style={{ width: width * 3 / 4, backgroundColor: '#bdc3c7', height: "18%", marginLeft: 50, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, borderTopRightRadius: 20, borderBottomEndRadius: 20, position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        <Text style={{ fontSize: 24, marginLeft: 65, fontWeight: 800, marginTop: 30 }}>Food</Text>
                        <Text style={{ fontSize: 13, marginLeft: 65 }}>120 Items</Text>
                    </View>
                    <Image source={require("../assets/shreyak-singh.png")} style={{ width: 60, height: 60, resizeMode: "contain", left: -25, top: -47, borderRadius: 60 }} />
                    <View style={{ width: 35, height: 35, backgroundColor: 'white', borderRadius: 60, display: 'flex', elevation: 3, position: 'absolute', left: "93%", top: 35 }}>
                        <Icon name={"angle-right"} size={20} color="black" style={{ textAlign: 'center', marginTop: 7 }} />
                    </View>
                </View>

                <View style={{ marginTop: 15, width: width * 3 / 4, backgroundColor: '#bdc3c7', height: "18%", marginLeft: 50, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, borderTopRightRadius: 20, borderBottomEndRadius: 20, position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        <Text style={{ fontSize: 24, marginLeft: 65, fontWeight: 800, marginTop: 30 }}>Beverages</Text>
                        <Text style={{ fontSize: 13, marginLeft: 65 }}>120 Items</Text>
                    </View>
                    <Image source={require("../assets/shreyak-singh.png")} style={{ width: 60, height: 60, resizeMode: "contain", left: -25, top: -47, borderRadius: 20 }} />
                    <View style={{ width: 35, height: 35, backgroundColor: 'white', borderRadius: 60, display: 'flex', elevation: 3, position: 'absolute', left: "93%", top: 35 }}>
                        <Icon name={"angle-right"} size={20} color="black" style={{ textAlign: 'center', marginTop: 7 }} />
                    </View>
                </View>

                <View style={{ marginTop: 15, width: width * 3 / 4, backgroundColor: '#bdc3c7', height: "18%", marginLeft: 50, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, borderTopRightRadius: 20, borderBottomEndRadius: 20, position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        <Text style={{ fontSize: 24, marginLeft: 65, fontWeight: 800, marginTop: 30 }}>Desserts</Text>
                        <Text style={{ fontSize: 13, marginLeft: 65 }}>120 Items</Text>
                    </View>
                    <Image source={require("../assets/shreyak-singh.png")} style={{ width: 60, height: 60, resizeMode: "contain", left: -25, top: -47, borderRadius: 20, transform: [{ rotate: '45deg' }] }} />
                    <View style={{ width: 35, height: 35, backgroundColor: 'white', borderRadius: 60, display: 'flex', elevation: 3, position: 'absolute', left: "93%", top: 35 }}>
                        <Icon name={"angle-right"} size={20} color="black" style={{ textAlign: 'center', marginTop: 7 }} />
                    </View>
                </View>

                <View style={{ marginTop: 15, width: width * 3 / 4, backgroundColor: '#bdc3c7', height: "18%", marginLeft: 50, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, borderTopRightRadius: 20, borderBottomEndRadius: 20, position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        <Text style={{ fontSize: 24, marginLeft: 65, fontWeight: 800, marginTop: 30 }}>Promotions</Text>
                        <Text style={{ fontSize: 13, marginLeft: 65 }}>120 Items</Text>
                    </View>
                    <Image source={require("../assets/shreyak-singh.png")} style={{ width: 60, height: 60, resizeMode: "contain", left: -25, top: -47, borderRadius: 20, transform: [{ rotate: '45deg' }] }} />
                    <View style={{ width: 35, height: 35, backgroundColor: 'white', borderRadius: 60, display: 'flex', elevation: 3, position: 'absolute', left: "93%", top: 35 }}>
                        <Icon name={"angle-right"} size={20} color="black" style={{ textAlign: 'center', marginTop: 7 }} />
                    </View>
                </View>



            </View>
        </View >
    )
}