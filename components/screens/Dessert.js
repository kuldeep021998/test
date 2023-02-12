import { View, Text, Image, ScrollView, Dimensions, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Entipo from "react-native-vector-icons/Entypo";
import Input from "../uicomponent/Input";
import MCI from "react-native-vector-icons/FontAwesome5"

const { height, width } = Dimensions.get("window")

export default function Dessert() {

    const image = [
        { id: 1, text1: "Mulbury Pizza", text2: "Minute By Tuk Tuk", text3: "Desserts", text4: "", source: require("../assets/french.png") },
        { id: 2, text1: "Dark Chocolate Cake", text2: "Cakes by Tella", text3: "Desserts", source: require("../assets/dark.png") },
        { id: 3, text1: "Street Shake", text2: "Café Racer", text3: "Desserts", source: require("../assets/street.png") },
        { id: 4, text1: "Fudgy Chewy Brownies", text2: "Minute By Tuk Tuk", text3: "Desserts", source: require("../assets/fudgy.png") }
    ]

    const ReturnImageTwo = ({ item }) => {
        console.log(item);
        return (
            <View style={{ flexDirection: 'column', marginTop: 8 }}>
                <Image source={item.source} style={{ width: '100%', height: 230, backgroundColor: "red", resizeMode: "cover" }} />
                <View style={{ position: 'absolute', top: "70%" }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Metropolis', color: '#ffffff', fontWeight: 800, marginLeft: 10 }}>{item.text1}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 12, marginTop: 5 }}>
                        <Icon name={"star"} size={15} style={{ color: 'red', marginTop: -1 }} />
                        <Text style={{ marginLeft: 5, color: '#ffffff' }}>4.9</Text>
                        <Text style={{  marginLeft: 5, color: '#ffffff' }}>{item.text2}</Text>
                        <Entipo name={"dot-single"} size={15} style={{ color: 'red' }} />
                        <Text style={{ color: '#ffffff' }}>{item.text3}</Text>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={{ margin: height * 0.001, display: 'flex', backgroundColor: '#ecf0f1' }}>
            <View style={{ marginTop: 20, marginBottom: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: "black" }}>Desserts</Text>
                    <MCI name={"shopping-cart"} size={20} color="black" />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Input iconName={"search1"} placeholder="Search Food" />
                </View>
                <View style={{ marginTop: 30, marginBottom: 60 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={image}
                        renderItem={({ item }) => (
                            <ReturnImageTwo item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

