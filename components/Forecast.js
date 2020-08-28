import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'

export default function Forecast(props){
    // console.log(props.name)
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
        nameProv = "Pattaya";
        picture = require("../imgChonburi.jpg");
    }
    if (props.name == "Chiang Rai") {
        nameProv = "Chiang Rai";
        picture = require("../img05.jpeg");
    }
    if (props.name == "Lampang") {
        nameProv = "Lampang";
        picture = require("../img07.jpg");
    }
    if (props.name == "Phitsanulok") {
        nameProv = "Phitsanulok";
        picture = require("../img08.jpeg");
    }

    var bg = require("../bgStandard.png");
    if(props.main == "Clouds"){
        bg = require("../bgCloud.jpg");
    }
    if(props.main == "Rain"){
        bg = require("../bgRain.jpg");
    }


    return (
        <ImageBackground source={bg} style={styles.backdrop}>
        <View>
            <Text style={styles.h1}>{nameProv}</Text>
            <Text style={styles.h2}>{props.main}</Text>
            <Text style={styles.h2}>{props.description}</Text>
            <Text style={styles.h2}>{props.temp} °C</Text>
            <Text style={styles.h2}>Feel like :{props.feel} °C</Text>
            <View style={{paddingTop: '10%'}}>
                <Image source={picture} style={{width: 200, height: 200}}/>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    h1: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: '#0033CC',
        paddingTop: '10%',
    },

    h2: {
        fontSize: 30,
        color: '#0033CC',
        alignItems: 'center',
    },

    backdrop: {
        flexDirection: 'column', //This is Default this is Portrait
        // justifyContent: 'center',
        alignItems: 'center', // opposite of FlexDirection is lanscape
        width: '100%',
        height: '100%',
    },


})