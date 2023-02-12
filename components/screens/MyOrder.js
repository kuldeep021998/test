import { View, Text, FlatList, Image, Dimensions } from "react-native";
import Entipo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome5";
import AppButton from "../uicomponent/AppButton";

const { width, height } = Dimensions.get("window");


export default function MyOrder() {

    const image = [
        { id: 1, title: "offers", title1: "Cafe De Noir", text1: "Mulbury Pizza", text2: "Burger", text3: "Western", text4: "", source: require("../assets/alireza-etemadi.png"), size: "x1", si1: "Beef Burger", si2: "Classic Burger", si3: 'Cheese Chicken Burger', si4: "Chicken Legs Basket", si5: "French Fries Large", p1: "$16", p2: "$14", p3: "$7", p4: "$18", p5: "$27" }
    ]


    const ReturnImageTwo = () => {
        return image.map((item) => {
            return (
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 30, marginTop: 20 }}>
                        <Image source={item.source} style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }} />
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: 'metropolis', color: 'black', fontWeight: 800, marginTop: 15, marginLeft: 10 }}>{item.text1}
                            </Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                                <Entipo name={"star"} size={15} style={{ color: 'red' }} />
                                <Text style={{ marginLeft: 5, marginTop: 2, color: '#B6B7B7' }}>4.9</Text>
                                <Text style={{ marginLeft: 5, marginTop: 2, color: '#B6B7B7' }}>( 124 ratings )</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                                <Text style={{ color: '#B6B7B7' }}>{item.text2}</Text>
                                <Entipo name={"dot-single"} size={15} style={{ color: 'red' }} />
                                <Text style={{ color: '#B6B7B7' }}>{item.text3}</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                                <Entipo name={"location-pin"} size={15} style={{ color: 'red' }} />
                                <Text style={{ marginLeft: 5,  }}>No. 3</Text>
                                <Text style={{ marginLeft: 5,  }}>4th Lane</Text>
                                <Text style={{ marginLeft: 5,  }}>New York</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#dcdde1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 15 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text>{item.si1}  {item.size}</Text>
                            <Text>{item.p1}</Text>
                        </View>

                        <View style={{ marginTop: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text>{item.si2}  {item.size}</Text>
                            <Text>{item.p2}</Text>
                        </View>
                        <View style={{ marginTop: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text>{item.si3}  {item.size}</Text>
                            <Text>{item.p3}</Text>
                        </View>
                        <View style={{ marginTop: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text>{item.si4}  {item.size}</Text>
                            <Text>{item.p4}</Text>
                        </View>
                        <View style={{ marginTop: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text>{item.si5}  {item.size}</Text>
                            <Text>{item.p5}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 15 }}>
                        <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>Delivery Instructions</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ color: '#FC6011', fontSize: 12, fontWeight: 700 }}>+</Text>
                            <Text style={{ marginLeft: 10, color: '#FC6011', fontSize: 12, fontWeight: 700 }}>Add Notes</Text>
                        </View>
                    </View>
                    <View style={{ padding: 15 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                            <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>Sub Total</Text>
                            <Text style={{ color: '#FC6011', fontSize: 15, fontWeight: 700 }}>$68</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>Delivery Cost</Text>
                            <Text style={{ color: '#FC6011', fontSize: 15, fontWeight: 700 }}>$68</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 15 }}>
                        <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>Total</Text>
                        <Text style={{ color: '#FC6011', fontSize: 20, fontWeight: 700 }}>$67</Text>
                    </View>
                </View>
            )
        })
    }
    return (
        <View style={{ margin: height * 0.001 }}>
            <ReturnImageTwo />
            <View style={{ alignItems: 'center' }}>
                <AppButton style={{ marginTop: 15 }} buttonText={'Check Out'} bgColor='#4a69bd' btnWidth={0.8} />
            </View>
        </View>
    )
}