import AppButton from "../uicomponent/AppButton";
import Input from "../uicomponent/Input";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export default function Reset({ navigation }) {
    return (
        <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: height * 0.1 }}>
            <Text style={{ fontSize: 30, margin: 15, fontWeight: 500 }}>Reset Password</Text>
            <Text>Please enter your email to receive a</Text>
            <Text style={{marginBottom: 50}}>link to create a new password via email</Text>
            <Input placeholder="Your Email" />
            <AppButton onPress={()=>navigation.navigate("Otp")} buttonText={'Reset'} bgColor='#4a69bd' btnWidth={0.8} />
        </View>
    )
}