import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, Button, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const AvailableZipItems = [
    { place: 'Hatyai', code: '90110', picture:require('../imgHatyai.jpg')},
    { place: 'Trang', code: '92000', picture:require('../imgTrange.jpg')},
    { place: 'Chiangmai', code: '50000', picture:require('../imgChaingmai.jpg')},
    { place: 'Khonkaen', code: '40000', picture:require('../imgKhonkaen.jpg')},
    { place: 'ChaophrayaSurasak', code: '20000', picture:require('../imgChonburi.jpg')},
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        
        <View style={styles.backdrop}>
            <Text style={styles.Ctext01}>{place} {code}</Text>
        </View>
    </TouchableHighlight>

)
    
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg02.jpg')} style={styles.backdrop}>
            <FlatList style={styles.zipItem}
                data = {AvailableZipItems}
                keyExtractor = {item =>item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        paddingTop : '20%',
        paddingLeft: '10%',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    Ctextcode: {
        justifyContent: 'flex-end',
        
    },
    // Background Picture
    backdrop: {
        flex: 2,
        flexDirection: 'column', //This is Default this is Portrait
        // alignItems: "flex-start", // opposite of FlexDirection is lanscape
        // justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    },

    // Color

    Ctext01: {
        flexDirection: 'column',
        color: '#FFFFFF',
        alignItems: "center",
        
        // justifyContent: 'stretch',
        paddingTop: '10%',
    },

    img: {
        flex: 1,
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        opacity: 1,
    },

    White: {
        color: '#FFFFFF',
    },

    //

    test11: {
       fontSize: 10,
    },

})


// import React from 'react'
// import { FlatList, View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
// import { TouchableHighlight } from 'react-native-gesture-handler'
// import { useNavigation } from '@react-navigation/native'

// const AvailableZipItems = [
//     { place: 'Hatyai', code: '90110'},
//     { place: 'Trang', code: '92000'},
//     { place: 'Chiangmai', code: '50000'},
//     { place: 'Khonkaen', code: '40000'},
//     { place: 'Chonburi', code: '20000'},
//     { place: 'Krabi', code: '81000'},
// ]

// const ZipItem = ({place, code, navigation}) => (
//     <TouchableHighlight onPress={() => {
//         navigation.navigate('Weather', {zipCode: code})
//     }}>
        
//         <View style={styles.backdrop}>
//             <Text style={styles.Ctext01}>{place} {code}</Text>
//             {/* <Text style ={styles.Ctextcode}> </Text>  */}
//             {/* <Text style={styles.Ctext02}>{code}</Text> */}
//             {/* <Text style={styles.Ctext02}>{code}</Text> */}
//             {/* <Button style={styles.White, styles.test1} title={place}/> */}
//         </View>
//     </TouchableHighlight>
    
// )
    
// export default function ZipCodeScreen() {
//     const navigation = useNavigation()
//     return (
//         <ImageBackground source={require('../bg02.jpg')} style={styles.backdrop}>
//             <FlatList style={styles.zipItem}
//                 data = {AvailableZipItems}
//                 keyExtractor = {item =>item.code}
//                 renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
//             />
//         </ImageBackground> 
//     )
// }

// const styles = StyleSheet.create({
//     zipItem: {
//         flex: 1,
//         paddingTop : '20%',
//         paddingLeft: '10%',
//     },
//     zipPlace: {
//         flex: 1,
//     },
//     zipCode: {
//         flex: 1,
        
//     },
//     Ctextcode: {
//         justifyContent: 'flex-end',
        
//     },
//     // Background Picture
//     backdrop: {
//         flex: 2,
//         flexDirection: 'column', //This is Default this is Portrait
//         // alignItems: "flex-start", // opposite of FlexDirection is lanscape
//         // justifyContent: 'space-evenly',
//         width: '100%',
//         height: '100%',
//     },

//     // Color

//     Ctext01: {
//         flexDirection: 'column',
//         color: '#FFFFFF',
//         alignItems: "center",
        
//         // justifyContent: 'stretch',
//         paddingTop: '10%',
//     },



//     White: {
//         color: '#FFFFFF',
//     },

//     //

//     test11: {
//        fontSize: 10,
//     },

// })

