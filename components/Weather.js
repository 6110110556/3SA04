import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'


export default function Weather(props) {
    const [forecastInfo, serForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg03.png')} style={styles.backdrop}>
            <Text> Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column', //This is Default this is Portrait
        // justifyContent: 'center',
        alignItems: 'center', // opposite of FlexDirection is lanscape
        width: '100%',
        height: '100%'
    }
})