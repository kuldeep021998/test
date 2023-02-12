import { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";

const { height, width} = Dimensions.get("window");

export default function User({ navigation }) {

    const [mobileEmail, setMobileEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputs, setInputs] = useState({ mobileEmail: '', password: '' });
    const [error, setError] = useState({});

    const validate = () => {
        var isValid = true;
        if (!inputs.mobileEmail) {
            handleErrors("Please Input Email / Mobile", "mobileEmail")
            isValid = false
        }
        if (!inputs.password) {
            handleErrors("Please Input Password", "password")
            isValid = false
        }
        return isValid
    }


    const handleClick = async () => {
        if (validate()) {
            var result = await postData('user/check_user_mobile', { mobile: inputs.mobileEmail })
            alert(result.status)
        }
    }

    const handleValues = (txt, attr) => {
        setInputs(prevStates => ({ ...prevStates, [attr]: txt }))
    }

    const handleErrors = (txt, attr) => {
        setError(prevStates => ({ ...prevStates, [attr]: txt }))
    }


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', margin: height * 0.01, marginBottom: 20 }}>
            <Image source={require("../assets/mine.jpg")} style={{ resizeMode: "contain", width: 100, height: 100, borderRadius: 100 }} />
            <Text>KULDEEP</Text>
            <Text>+91 7415179875</Text>
            <Text>ks@gmail.com</Text>
            <Input placeholder="Name"  />
            <Input placeholder="Email" />
            <Input placeholder="Mobile Number" />
            <Input placeholder="Address" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <AppButton onPress={() => navigation.navigate("Reset")} buttonText={'Save'} bgColor='#FC6011' btnWidth={0.8} />
        </View>
    )
}