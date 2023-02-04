import { View, Image } from "react-native";
import Input from "../uicomponent/Input.";
import AppButton from "../uicomponent/AppButton";
import imgs from '../assets/Monkeyface.png'

export default function Home() {
    return (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
            <Image source={require("../assets/Monkeyface.png")} style={{  width: 50, height: 50 }} />
        </View>
    )
}