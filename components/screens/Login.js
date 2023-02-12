import { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View, TouchableOpacity, Alert } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";
import { Text } from "react-native";
import { postData } from "../connection/FetchServices";

const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {
    const [inputs, setInputs] = useState({ mobile: '', email: '', password: '' });
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
            var body = { mobile: inputs.mobileEmail, email: inputs.mobileEmail, password: inputs.password }
            var result = await postData('user/login', body)
            if(result.status){
                {navigation.navigate("Home")}
            }
            else{
                Alert("invalid  Credential")
            }
        }
    }

    const handleValues = (txt, attr) => {
        setInputs(prevStates => ({ ...prevStates, [attr]: txt }))
    }

    const handleErrors = (txt, attr) => {
        setError(prevStates => ({ ...prevStates, [attr]: txt }))
    }

    return (
        <View style={{ margin: height * 0.001 }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 50 }}>
                <Text style={{ fontSize: 25 }}>Login</Text>
                <Text style={{ fontSize: 14, marginTop: 10 }}>Add your details to login</Text>
                <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Your Email / Mobile " />
                <Input error={error.password} onFocus={() => handleErrors(null, 'password')} onChangeText={(txt) => handleValues(txt, 'password')} placeholder="Password" />
                <AppButton style={{ marginTop: 10 }} onPress={handleClick} buttonText={'Login'} bgColor='#e67e22' btnWidth={0.8} />
                <Text onPress={() => navigation.navigate("Reset")} style={{ fontSize: 14, marginTop: 20 }}>Forgot your password?</Text>
                <Text style={{ fontSize: 14, marginTop: 30 }}>or Login With</Text>
                <AppButton onPress={() => navigation.navigate("Home")} buttonText={'Login with Facebook'} bgColor='#4a69bd' btnWidth={0.8} />
                <AppButton style={{ marginTop: 10 }} onPress={handleClick} buttonText={'Login with Google'} bgColor='#4a69bd' btnWidth={0.8} />
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 60 }}>
                    <Text style={{ fontSize: 14 }}>Don't have an Account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{ marginLeft: 5, color: '#eb2f06', fontWeight: 500, fontSize: 14 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txtContainer: {
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#f2f2f2',
        padding: 10,
        marginTop: 10
    },
    btnContainer: {
        width: width * 0.8,
        backgroundColor: '#3498db',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: '#f2f2f2',
        padding: 10,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center'
    }
})