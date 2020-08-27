import React from 'react'
import { View, Text, Image, } from 'react-native'
import AvailableZipItems from '../screen/ZipCodeScreen'

export default function Forecast(props){
    console.log(props.name)
   let picture = "";
    if (props.name == "Hat Yai") {
        picture = require("../imgHatyai.jpg");
    }
    if (props.name == "Trang") {
        picture = require("../imgTrange.jpg");
    }
    if (props.name == "Chiang Mai") {
        picture = require("../imgChaingmai.jpg");
    }
    if (props.name == "Khon Kaen") {
        picture = require("../imgKhonkaen.jpg");
    }
    if (props.name == "Chaophraya Surasak") {
        picture = require("../imgChonburi.jpg");
    }

    return (
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
            <View style={{paddingTop: 80}}>
                <Image source={picture} style={{width: 200, height: 200}}/>
            </View>
            
            {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width: 200, height: 200}} /> */}
        </View>
    )
}