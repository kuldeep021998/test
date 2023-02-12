import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ruler from 'react-native-animated-ruler';
import MCI from "react-native-vector-icons/AntDesign";
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from "react";

const { height, width } = Dimensions.get("window");


export default function Order() {


    const [count, setCount] = useState(0);
    const countries = ["India", "Pak", "Rus", "Usa", "China"]

    const DropDown = ({ selectedItem, index }) => {
        return countries.map((item, index) => {
            return (
                <Text>{item}</Text>
            )
        })
    }

    const Counter = () => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { setCount(count - 1) }}>
                    <View style={{ width: 50, height: 30, backgroundColor: '#EE5A24', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} >
                        <MCI name={"minus"} size={30} color="white" />
                    </View >
                </TouchableOpacity >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginLeft: 15, color: '#EE5A30' }}>{count}</Text>
                </View>
                <TouchableOpacity onPress={() => { setCount(count + 1) }}>
                    <View style={{ marginLeft: 15, width: 50, height: 30, backgroundColor: '#EE5A24', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} >
                        <Icon name={"plus"} size={15} color="white" />
                    </View >
                </TouchableOpacity >
            </View>
        );
    }



    return (
        <View style={{ margin: height * 0.001 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require("../assets/chad-montano.png")} style={{ height: '70%', width: '100%', resizeMode: 'cover', }} />
                <View style={{ position: 'absolute', top: "53%", width: "100%" }}>
                    <View style={{ width: '100%', height: height, backgroundColor: '#f5f6fa', borderTopLeftRadius: 40, borderTopRightRadius: 40, position: 'relative' }}>
                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <Text style={{ fontSize: 25, fontWeight: 500, marginTop: 15, color: '#4A4B4D' }}>Tandoori Chicken Pizza</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                                <MCI name={"star"} size={15} color="#EE5A30" style={{ marginLeft: 2 }} />
                                <MCI name={"star"} size={15} color="#EE5A30" style={{ marginLeft: 3 }} />
                                <MCI name={"star"} size={15} color="#EE5A30" style={{ marginLeft: 3 }} />
                                <MCI name={"star"} size={15} color="#EE5A30" style={{ marginLeft: 3 }} />
                                <Icon name={"star"} size={15} color="#EE5A30" style={{ marginLeft: 3 }} />
                            </View>
                            <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 5, color: '#EE5A30' }}>4 Star Ratings</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: "71%", marginTop: -30 }}>
                                <Text style={{ color: 'black', fontSize: 30, color: "grey", fontWeight: 800, fontFamily: 'Metropolis' }}>Rs. 750</Text>
                                <Text style={{ fontSize: 15, fontFamily: 'Metropolis', color: '#4A4B4D', marginLeft: 20 }}>/ per portion</Text>
                            </View>
                            <View style={{ marginTop: 20, marginLeft: 2 }}>
                                <Text style={{ fontSize: 15, fontWeight: 700, color: '#4A4B4D' }}>Description</Text>
                                <Text style={{ color: '#7C7D7E', marginTop: 5 }}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                                    of a document or a typeface without relying on meaningful content.
                                </Text>
                            </View>
                            <View style={{ marginTop: 20, marginLeft: 2 }}>
                                <Text style={{ fontSize: 15, fontWeight: 700, color: '#4A4B4D' }}>Customize your Order</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <View style={{ marginTop: 10 }}>
                                    <SelectDropdown
                                        data={countries}
                                        keyExtractor={item => item.id}
                                        buttonStyle={{ backgroundColor: '#dcdde1', width: width * 9 / 10, height: 40 }}
                                        defaultButtonText={"- Select the size of the portion -"}
                                    />
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <SelectDropdown
                                        data={countries}
                                        keyExtractor={item => item.id}
                                        buttonStyle={{ backgroundColor: '#dcdde1', width: width * 9 / 10, height: 40 }}
                                        defaultButtonText={"- Select the ingredients -"}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 20, marginLeft: 23, marginRight: 23, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 15, fontWeight: 700, color: '#4A4B4D' }}>Number of Portions</Text>
                                <Counter />
                            </View>
                            <View style={{ width: "35%", height: "25%", backgroundColor: '#EE5A24', marginTop: 15, borderTopRightRadius: 60, borderBottomEndRadius: 60, justifyContent: 'center', elevation: 3 }}>
                                <View style={{ width: "190%", backgroundColor: 'white', height: "70%", marginLeft: 80, borderTopLeftRadius: 40, borderBottomLeftRadius: 40, borderTopRightRadius: 20, borderBottomEndRadius: 20 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 8, margin: 5, position: 'relative' }}>
                                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Text style={{ fontSize: 15, textAlign: 'center', color: '#4A4B4D' }}>Total Price</Text>
                                            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 800, color: '#4A4B4D' }}>LKR 1500</Text>
                                            <View style={{ width: 150, height: 30, backgroundColor: '#EE5A24', borderRadius: 50, marginTop: 5, flexDirection: 'row', alignItems: 'center' }} >
                                                <Icon name={"shopping-cart"} size={15} style={{ color: '#fff', marginLeft: 15 }} />
                                                <Text style={{ color: '#fff', fontSize: 14, marginLeft: 15 }} >Add to cart</Text>
                                            </View >
                                        </View>
                                        <View style={{ width: 40, height: 40, elevation: 10, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 25, left: "100%" }}>
                                            <Icon name={"shopping-cart"} size={15} color="black" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}