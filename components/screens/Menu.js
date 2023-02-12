import { View, Image, FlatList, ScrollView, StatusBar, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import MCI from "react-native-vector-icons/AntDesign";
import Input from "../uicomponent/Input";
import { useState } from "react";
import Entipo from "react-native-vector-icons/Entypo";
import Maps from "../screens/Maps";
import { TextInput } from "react-native";


const { width, height } = Dimensions.get("window");

export default function Menu({ navigation }) {

    const photos = [
        { id: 1, title: "Minute By Tuk Tuk", text1: "Mulbury Pizza", text2: "Cafe", text3: "Western", text4: "", source: require("../assets/minute.png") },
        { id: 2, title: "Cafe De Noir", title1: "Indian", text1: "Mulbury Pizza", text2: "Cafe", text3: "Western", source: require("../assets/cafe.png") },
        { id: 3, title: "Bakes by Tella", title1: "Italian", text1: "Mulbury Pizza", text2: "Cafe", text3: "Western", source: require("../assets/bakes.png") }
    ]

    const image = [
        { id: 1, title: "offers", title1: "Cafe De Bambaa", text1: "Mulberry Pizza by Josh", text2: "Cafe", text3: "Western Food", text4: "Western Food", source: require("../assets/offers.png") },
        { id: 2, title: "Sri Lankan", title1: "Burger by Bella", text1: "Barita", text2: "Cafe", text3: "Western Food", text4: "Coffee", source: require("../assets/srilankan.png") },
        { id: 3, title: "Indian", title1: "Italian", text1: "Pizza Rush Hour", text2: "Cafe", text3: "Western Food", text4: "Italian Food", source: require("../assets/italian.png") },
    ]

    const pictures = [
        { id: 1, title: "Mulberry Pizza by Josh", text2: "Cafe", text3: "Western Food", source: require("../assets/mulberry.png") },
        { id: 2, title: "Barita", text2: "Cafe", text3: "Coffee", source: require("../assets/barita.png") },
        { id: 3, title: "Pizza Rush Hour", text2: "Cafe", text3: "Italian Food", source: require("../assets/pizza.png") },
    ]

    const ReturnImage = (item) => {
        return image.map((item) => {
            return (
                <View>
                    <Image source={item.source} style={{ width: 100, height: 100, resizeMode: 'contain', marginRight: 10 }} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            )
        })
    }

    const ReturnImageOne = (item) => {
        return image.map((item) => {
            return (
                <View style={{ marginLeft: 25 }}>
                    <Image source={item.source} style={{ width: 300, height: 180, borderRadius: 20 }} />
                    <View>
                        <Text style={{ fontSize: 16, fontFamily: 'metropolis', color: 'black', fontWeight: 800, marginTop: 15, marginLeft: 10 }}>{item.title1}
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                            <Text style={{ color: '#B6B7B7' }}>{item.text2}</Text>
                            <Entipo name={"dot-single"} size={15} style={{ color: 'red' }} />
                            <Text style={{ color: '#B6B7B7', marginRight: 50 }}>{item.text3}</Text>
                            <MCI name={"star"} size={15} style={{ color: '#FC6011' }} />
                            <Text style={{ marginLeft: 5, color: '#FC6011' }}>4.9</Text>
                        </View>
                    </View>
                </View>
            )
        })
    }

    const ReturnImageTwo = ({ item }) => {
        console.log(item);
        return (
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                <View>
                    <Image source={item.source} style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }} />
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontFamily: 'metropolis', color: 'black', fontWeight: 800, marginTop: 15, marginLeft: 10 }}>{item.title}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                        <Text style={{ color: '#B6B7B7' }}>{item.text2}</Text>
                        <Entipo name={"dot-single"} size={15} style={{ color: 'red' }} />
                        <Text style={{ color: '#B6B7B7' }}>{item.text3}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                        <MCI name={"star"} size={15} style={{ color: '#FC6011' }} />
                        <Text style={{ marginLeft: 5, color: '#FC6011' }}>4.9</Text>
                        <Text style={{ marginLeft: 5, color: '#B6B7B7' }}>(124 ratings)</Text>
                    </View>
                </View>
            </View>
        )
    }

    const ReturnImageT = ({ item }) => {
        console.log(item);
        return (
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View>
                    <Image source={item.source} style={{ width: '100%', height: 230, resizeMode: "cover" }} />
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontFamily: 'metropolis', color: '#4A4B4D', fontWeight: 800, marginTop: 5, marginLeft: 20 }}>{item.title}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 20, marginBottom: 20 }}>
                        <MCI name={"star"} size={15} style={{ color: 'red' }} />
                        <Text style={{ marginLeft: 5, color: '#B6B7B7' }}>4.9</Text>
                        <Text style={{ marginLeft: 5, color: '#B6B7B7' }}>(124 ratings)</Text>
                        <Text style={{ marginLeft: 10, color: '#B6B7B7' }}>{item.text2}</Text>
                        <Entipo name={"dot-single"} size={15} color="#FC6011" />
                        <Text style={{ marginLeft: 2, color: '#B6B7B7' }}>{item.text3}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const handleClick = () => {
        navigation.navigate("Maps")
    }


    return (
        <View style={{ margin: height * 0.001, display: 'flex', backgroundColor: '#ffffff' }}>
            <ScrollView style={{ display: 'flex' }} showsVerticalScrollIndicator={false}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: "black" }}>Good Morning Akila !</Text>
                    <Icon name={"shopping-cart"} size={20} color="black" />
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 14, color: 'grey' }}>Delivering to</Text>
                    <TouchableOpacity onPress={handleClick}>
                        <View style={{ height: 40, width: width * 0.5, backgroundColor: '#dfe6e9', borderColor: '#dfe6e9', borderRadius: 50, borderWidth: 0.5, padding: 2, marginTop: 15, display: 'flex', flexDirection: 'row' }}>
                            <TextInput editable={false} style={{ fontSize: 14, marginLeft: 15 }} placeholder="Current Location" color="black" />
                            <Icon name={"angle-down"} size={25} style={{ marginTop: 4, marginLeft: 40 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Input iconName={"search1"} placeholder="Search Food" color='#dfe6e9' />
                </View>


                <View style={{ marginTop: 20, marginBottom: 10, marginLeft: 10 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={image}
                        renderItem={({ item }) => (
                            <ReturnImage item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>


                <View style={{ marginLeft: 25, marginRight: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: "center" }}>
                    <Text style={{ fontSize: 25, fontWeight: 500, color: '#4A4B4D' }}>Popular Restaurants</Text>
                    <Text style={{ color: '#FC6011' }}>view all</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={photos}
                        renderItem={({ item }) => (
                            <ReturnImageT item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>

                {/*Most Popular*/}

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25, marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 500, color: '#4A4B4D' }}>Most Popular</Text>
                    <Text style={{ color: '#FC6011' }}>view all</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={image}
                        renderItem={({ item }) => (
                            <ReturnImageOne item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25, marginTop: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 500, color: '#4A4B4D' }}>Recent Items</Text>
                    <Text style={{ color: '#FC6011' }}>view all</Text>
                </View>
                <View style={{ marginTop: 30, marginBottom: 50 }}>
                    <FlatList
                        data={pictures}
                        renderItem={({ item }) => (
                            <ReturnImageTwo item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>

            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'metropolis',
        color: 'black',
        fontWeight: 800, marginTop: 4
    },
});