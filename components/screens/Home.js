import { View, Image, Text } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";
import imgs from '../assets/Monkeyface.png'

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <Image source={require("../assets/OrganShape.png")} style={{ width: "80%", height: "45%", position: 'absolute', top: 1 }} />
            <Image source={require("../assets/Monkeyface.png")} style={{ width: "25%", height: "15%", position: 'absolute', top: "35%" }} />
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: "83%" }}>
                <Text style={{ fontSize: 30, fontWeight: 800, color: 'orange' }}>Meal</Text>
                <Text style={{ fontSize: 30, fontWeight: 800 }}>Monkey</Text>
            </View>
            <Text style={{ fontSize: 12 }}>FOOD DELIVERY</Text>
            <View style={{marginTop: 30}}>
                <Text>Discover the best foods from over 1,000</Text>
                <Text>restaurants and fast delivery to your doorstep</Text>
            </View>
            <AppButton style={{marginTop: 30}} onPress={() => navigation.navigate("Login")} buttonText={'Login with Google'} bgColor='#4a69bd' btnWidth={0.8} />
            <AppButton onPress={() => navigation.navigate("SignUp")} buttonText={'Sign Up with Google'} bgColor='#4a69bd' btnWidth={0.8} />
        </View>
    )
}