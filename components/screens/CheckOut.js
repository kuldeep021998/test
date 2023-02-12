import { View, Text, FlatList, Image, Dimensions } from "react-native";
import Entipo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome5";
import AppButton from "../uicomponent/AppButton";

const { width, height } = Dimensions.get("window");


export default function CheckOut() {
    return (
        <View style={{ margin: height * 0.001 }}>
            <View style={{ margin: 10 }}>
                <View style={{ padding: 15, backgroundColor: '#dcdde1' }}>
                    <Text style={{ color: '#4A4B4D', marginBottom: 10, fontSize: 12 }}>Delivery Address</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View>
                            <Text style={{ color: '#4A4B4D', fontWeight: 800, fontSize: 15 }}>653 Nostrand Ave.,</Text>
                            <Text style={{ color: '#4A4B4D', fontWeight: 800, fontSize: 15 }}>Brooklyn, NY 11216</Text>
                        </View>
                        <Text style={{ color: '#FC6011' }}>Change</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#dcdde1', marginTop: 10 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 15 }}>
                        <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>Delivery Instructions</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ color: '#FC6011', fontSize: 12, fontWeight: 700 }}>+</Text>
                            <Text style={{ marginLeft: 10, color: '#FC6011', fontSize: 12, fontWeight: 700 }}>Add Card</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}>
                        <View style={{ width: "95%", height: 40, backgroundColor: '#B6B7B7', borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row', padding: 12 }}>
                            <Text style={{ color: '#7C7D7E', marginLeft: 10 }}>Cash on Delivery</Text>
                            <Entipo name={'circle'} color="black" />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}>
                        <View style={{ width: "95%", height: 40, backgroundColor: '#B6B7B7', borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row', padding: 12 }}>
                            <Text style={{ color: '#7C7D7E', marginLeft: 10 }}>Cash on Delivery</Text>
                            <Entipo name={'circle'} color="black" />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}>
                        <View style={{ width: "95%", height: 40, backgroundColor: '#B6B7B7', borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row', padding: 12 }}>
                            <Text style={{ color: '#7C7D7E', marginLeft: 10 }}>Cash on Delivery</Text>
                            <Entipo name={'circle'} color="black" />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#dcdde1', marginTop: 10 }}>
                    <View style={{ padding: 15 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                            <Text style={{ color: '#4A4B4D', fontSize: 12, fontWeight: 600 }}>Sub Total</Text>
                            <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>$68</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ color: '#4A4B4D', fontSize: 12, fontWeight: 600 }}>Delivery Cost</Text>
                            <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>$68</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ color: '#4A4B4D', fontSize: 12, fontWeight: 600 }}>Discount</Text>
                            <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>$68</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 15 }}>
                        <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>Total</Text>
                        <Text style={{ color: '#4A4B4D', fontSize: 15, fontWeight: 700 }}>$67</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', backgroundColor: '#dcdde1', marginTop: 10, height: "35%" }}>
                    <AppButton style={{ marginTop: 15 }} buttonText={'Send Order'} bgColor='#EE5A30' btnWidth={0.8} />
                </View>
            </View>
        </View>
    )
}