import { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";
import { Text } from "react-native";

const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {
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
            if (result.status) {
                { navigation.navigate('SignUp') }
            }
            else {
                Alert("Invalid Attempt")
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
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 25 }}>Login</Text>
            <Text style={{ fontSize: 14, marginTop: 10 }}>Add your details to login</Text>
            <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Your Email" />
            <Input error={error.password} setValue={setPassword} placeholder="Password" />
            <AppButton style={{ marginTop: 10 }} onPress={handleClick} buttonText={'Login'} bgColor='#e67e22' btnWidth={0.8} />
            <Text style={{ fontSize: 14, marginTop: 20 }}>Forgot your password?</Text>
            <Text style={{ fontSize: 14, marginTop: 30 }}>or Login With</Text>
            <AppButton onPress={() => navigation.navigate("Home")} buttonText={'Login with Facebook'} bgColor='#4a69bd' btnWidth={0.8} />
            <AppButton style={{ marginTop: 10 }} onPress={handleClick} buttonText={'Login with Google'} bgColor='#4a69bd' btnWidth={0.8} />
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 60 }}>
                <Text style={{ fontSize: 14 }}>Don't have an Account?</Text>
                <Text onPress={() => navigation.navigate("SignUp")} style={{ marginLeft: 5, color: '#eb2f06', fontWeight: 'bolder', fontSize: 14 }}>Sign Up</Text>
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