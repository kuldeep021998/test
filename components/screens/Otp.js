import { View, Text, Dimensions, StyleSheet } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";
import OTPTextInput from "react-native-otp-textinput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { height, width } = Dimensions.get("window");
import { useState } from "react";


export default function Otp({ navigation }) {

    const [otp, setOtp] = useState('');


    return (
        <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: height * 0.05 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 600, fontSize: 22 }}>We have sent an OTP to</Text>
                <Text style={{ fontWeight: 600, fontSize: 22 }}>your Mobile</Text>
                <Text style={{ marginTop: height * 0.01, fontWeight: 400 }}>Please check your mobile number 741*****75</Text>
                <Text style={{ marginBottom: height * 0.01, fontWeight: 400 }}>continue to reset your password</Text>
            </View>
            <View style={{ margin: height * 0.02 }}>
                <OTPTextInput inputCount={4} keyboardtype="phone-pad" />
            </View>
            <AppButton buttonText={'Reset'} bgColor='#4a69bd' btnWidth={0.8} />
            <View style={{ display: 'flex', flexDirection: 'row', margin: height * 0.05 }}>
                <Text>Didn't Receive?</Text>
                <Text style={{ marginLeft: height * 0.01, color: 'orange', fontWeight: 800 }}>Click Here</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputHidden: {
        width: '300px',
        borderColor: '#e5e5e5',
        borderWidth: '1px',
        borderRadius: '5px',
        padding: '15px',
    },
    otpContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})