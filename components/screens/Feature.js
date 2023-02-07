import { View, Text, Dimensions } from "react-native";
import AppButton from "../uicomponent/AppButton";
import { SliderBox } from "react-native-image-slider-box"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

const { height, width } = Dimensions.get("window");

export default function Feature({ navigation }) {
    const [index,setIndex]=useState(0)


    const images = [
        require("../assets/food.png"),
        require("../assets/Delivery.png"),
        require("../assets/Tracking.png")
    ]

    const data = [
        { id: 1, title: "Find Food You Love", text1: "Discover the best foods from over 1,000", text2: "restaurants and fast delivery to your doorstep" },
        { id: 2, title: "Delivery", text1: "Fast food delivery to your home, office", text2: "wherever you are" },
        { id: 3, title: "Live Tracking", text1: "Real time tracking of your food on the app", text2: "once you placed the order" }

    ]


    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: height * 0.05, padding: height * 0.005 }}>
            <View style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center' }}>
                <SliderBox style={{ width: 300, height: 300, marginLeft: 50 }} images={images} currentImageEmitter={i => setIndex(i)}
                    dotStyle={{ width: 10, height: 10, borderRadius: 50 }} dotColor="black" inactiveDotColor="green" autoPlay={true} autoPlayInterval={10} circleLoop={true} />
            </View>
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                <Text style={{ fontWeight: 700, fontSize: 22, fontFamily: 'metropolis' }}>{data[index].title}</Text>
                <Text style={{ marginTop: 50, fontWeight: 400 }}>{data[index].text1}</Text>
                <Text style={{ marginBottom: 10, fontWeight: 400 }}>{data[index].text2}</Text>
            </View>
            <AppButton onPress={() => navigation.navigate("Feature2")} buttonText={'Next'} bgColor='#4a69bd' btnWidth={0.8} />
        </View>
    )
}