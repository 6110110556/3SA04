import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, Image } from 'react-native'
import Forecast from './Forecast'



export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        name: '-'
    })
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=179fa86918fb17ed54cc9bdc0073fffc`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    name: json.name});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    

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