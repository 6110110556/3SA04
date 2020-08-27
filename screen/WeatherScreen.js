import React from 'react'
import { View } from 'react-native'
import Weather from '../components/Weather'

export default function WeatherScreen({route}) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode}/>
            {/* <ImageBackground source={route.patams.zipCode.picture} style = {styles.imgs}/>  */}
        </View>
    )
}