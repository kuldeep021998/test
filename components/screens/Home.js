import { View, Image } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";
import imgs from '../assets/Monkeyface.png'

export default function Home({navigation}) {
    return (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', position: 'relative' }}>
            <Image source={require("../assets/OrganShape.png")} style={{  width: "120%", height: "50%", position: 'absolute', top: 1}}/>
            <Image source={require("../assets/Monkeyface.png")} style={{  width: "30%", height: "20%", position: 'absolute', top: "42%"  }}/>
            <AppButton style={{ marginTop: "90%" }} onPress={()=>navigation.navigate("Login")} buttonText={'Login with Google'} bgColor='#4a69bd' btnWidth={0.8} />
            <AppButton style={{ marginTop: 10 }} onPress={()=>navigation.navigate("SignUp")} buttonText={'Sign Up with Google'} bgColor='#4a69bd' btnWidth={0.8} />
        </View>
    )
}