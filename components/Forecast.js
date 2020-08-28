import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Forecast(props){
    console.log(props.name)
   var picture = "";
   var nameProv = "";
    if (props.name == "Hat Yai") {
        nameProv = props.name;
        picture = require("../imgHatyai.jpg");
    }
    if (props.name == "Trang") {
        nameProv = props.name;
        picture = require("../imgTrange.jpg");
    }
    if (props.name == "Chiang Mai") {
        nameProv = props.name;
        picture = require("../imgChaingmai.jpg");
    }
    if (props.name == "Khon Kaen") {
        nameProv = props.name;
        picture = require("../imgKhonkaen.jpg");
    }
    if (props.name == "Chaophraya Surasak") {
        nameProv = "Pattaya"
        picture = require("../imgChonburi.jpg");
    }

    return (
        <View>
            <Text style={styles.h1}>{nameProv}</Text>
            <Text style={styles.h2}>{props.description}</Text>
            <Text style={styles.h2}>{props.temp}°C</Text>
            <View style={{paddingTop: 100}}>
                <Image source={picture} style={{width: 200, height: 200}}/>
        </View>
            
            {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width: 200, height: 200}} /> */}
        </View>
    )
}

const styles = StyleSheet.create({

    h1: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    h2: {
        fontSize: 20,
        color: '#FFFFFF',
        alignItems: 'center',
    },


})