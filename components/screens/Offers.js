import { View, Text, Image, ScrollView, Dimensions, FlatList } from "react-native";
import Entipo from "react-native-vector-icons/Entypo";
import MCI from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome5";

const { height, width } = Dimensions.get("window")

export default function Offers() {

    const photos = [
        { id: 1, title: "Minute By Tuk Tuk", text1: "Mulbury Pizza", text2: "Cafe", text3: "Western", text4: "", source: require("../assets/minute.png") },
        { id: 2, title: "Cafe De Noir", title1: "Indian", text1: "Mulbury Pizza", text2: "Cafe", text3: "Western", source: require("../assets/cafe.png") },
        { id: 3, title: "Bakes by Tella", title1: "Italian", text1: "Mulbury Pizza", text2: "Cafe", text3: "Western", source: require("../assets/bakes.png") }
    ]

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


    return (
        <View style={{ margin: height * 0.001, backgroundColor: '#ffffff'}}>
            <View style={{ margin: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 25, fontWeight: 500, color: '#4A4B4D' }}>Latest Offers</Text>
                <Icon name={"shopping-cart"} size={20} color="black" />
            </View>
            <View style={{ marginTop: "5%", marginBottom: "40%" }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={photos}
                    renderItem={({ item }) => (
                        <ReturnImageT item={item} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}