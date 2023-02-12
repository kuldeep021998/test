import { View, StyleSheet, SafeAreaView, Dimensions, Text, Button, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
const { height, width } = Dimensions.get("window")

export default function Maps({ navigation }) {
    const [currentLongitude, setCurrentLongitude] = useState(78.1772);
    const [currentLatitude, setCurrentLatitude] = useState(26.2124);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                subscribeLocationLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        getOneTimeLocation();
                        subscribeLocationLocation();
                    } else {
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchID);
        };
    }, []);


    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {

                //getting the Longitude from the location json
                const currentLongitude =
                    position.coords.longitude;

                //getting the Latitude from the location json
                const currentLatitude =
                    position.coords.latitude;
                console.log({ currentLongitude, currentLatitude })
                //Setting Longitude state
                setCurrentLongitude(currentLongitude);

                //Setting Longitude state
                setCurrentLatitude(currentLatitude);

                setLoader(false)
            },
            (error) => {
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };

    const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
            (position) => {
                //Will give you the location on location change
                console.log(position);

                //getting the Longitude from the location json        
                const currentLongitude =
                    position.coords.longitude;

                //getting the Latitude from the location json
                const currentLatitude =
                    position.coords.latitude;
                console.log({ currentLongitude, currentLatitude })
                //Setting Longitude state
                setCurrentLongitude(currentLongitude);

                //Setting Latitude state
                setCurrentLatitude(currentLatitude);

                setLoader(false)
            },
            (error) => {
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000
            },
        );
    };

    return (
        <View style={{ flex: 1, margin: height * 0.001 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {loader ? <ActivityIndicator /> : <MapView
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude: currentLatitude,
                            longitude: currentLongitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        customMapStyle={mapStyle}
                        onRegionChangeComplete={(e) => {
                            setCurrentLatitude(e.latitude)
                            setCurrentLongitude(e.longitude)
                        }}
                    >
                        <Marker
                            draggable
                            coordinate={{
                                latitude: currentLatitude,
                                longitude: currentLongitude,
                            }}
                            onDragEnd={
                                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                            }
                            title={'Test Marker'}
                            description={'This is a description of the marker'}
                        />
                    </MapView>}

                </View>
            </SafeAreaView>
        </View>
    )
}

const mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }],
    },
];


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})

