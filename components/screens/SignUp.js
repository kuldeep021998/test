import { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View, StatusBar } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";
import { Text } from "react-native";
import { postData } from "../connection/FetchServices";

export default function SignUp({ navigation }) {

    const [inputs, setInputs] = useState({ name: '', mobile: '', email: '', address: '', password: '' });
    const [error, setError] = useState({});

    const validate = () => {
        var isValid = true;
        if (!inputs.name) {
            handleErrors("Please Input Name", "name")
            isValid = false
        }
        if (!inputs.mobile) {
            handleErrors("Please Input Mobile", "mobile")
            isValid = false
        }
        if (!inputs.email) {
            handleErrors("Please Input Email", "email")
            isValid = false
        }
        if (!inputs.address) {
            handleErrors("Please Input Name", "address")
            isValid = false
        }
        if (!inputs.password) {
            handleErrors("Please Input Password", "password")
            isValid = false
        }
        if (!inputs.confirmpassword) {
            handleErrors("Please Input Confirm Password", "confirmpassword")
            isValid = false
        }
        return isValid
    }


    const handleClick = async () => {
        if (validate()) {
            var body = { name: inputs.name, mobile: inputs.mobile, email: inputs.email, address: inputs.address, password: inputs.password, confirmpassword: inputs.confirmpassword }
            var result = await postData('user/register', body)
            alert(JSON.stringify(result.status))
        }
    }

    const handleValues = (txt, attr) => {
        setInputs(prevStates => ({ ...prevStates, [attr]: txt }))
    }

    const handleErrors = (txt, attr) => {
        setError(prevStates => ({ ...prevStates, [attr]: txt }))
    }


    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
            <Text style={{ fontSize: 25 }}>Sign Up</Text>
            <Text style={{ fontSize: 14, marginTop: 10 }}>Add your details to Sign up</Text>
            <Input error={error.name} onFocus={() => handleErrors(null, "name")} onChangeText={(txt) => handleValues(txt, 'name')} placeholder="Name" />
            <Input error={error.mobile} onFocus={() => handleErrors(null, "mobile")} onChangeText={(txt) => handleValues(txt, 'mobile')} placeholder="Mobile Number" />
            <Input error={error.email} onFocus={() => handleErrors(null, "email")} onChangeText={(txt) => handleValues(txt, 'email')} placeholder="Email" />
            <Input error={error.address} onFocus={() => handleErrors(null, "address")} onChangeText={(txt) => handleValues(txt, 'address')} placeholder="Address" />
            <Input error={error.password} onFocus={() => handleErrors(null, "password")} onChangeText={(txt) => handleValues(txt, 'password')} placeholder="Password" />
            <Input error={error.confirmpassword} onFocus={() => handleErrors(null, "confirmpassword")} onChangeText={(txt) => handleValues(txt, 'confirmpassword')} placeholder="Confirm Password" />
            <AppButton onPress={handleClick} buttonText={'Sign up'} bgColor='#FC6011' btnWidth={0.8} />
        </View>
    )
}