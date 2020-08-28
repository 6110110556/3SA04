import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, Button, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import { render } from 'react-dom'


// const AvailableZipItems = [
//     { place01: 'Hatyai', code: '90110', picture:require('../imgHatyai.jpg')},
//     { place02: 'Trang', code: '92000', picture:require('../imgTrange.jpg')},
//     { place01: 'Chiangmai', code: '50000', picture:require('../imgChaingmai.jpg')},
//     { place02: 'Khonkaen', code: '40000', picture:require('../imgKhonkaen.jpg')},
//     { place01: 'Pattaya', code: '20000', picture:require('../imgChonburi.jpg')},
//     { place02: 'phatthalung', code: '93000, picture:require('../imgChonburi.jpg')},
//     81000 : Krabi
//     96000 : Narathiwat

// ]

// var i = 0;
// var round = 0;
// const AvailableZipItems01 = [
//     { place01: 'Hatyai', code: '90110', picture:require('../imgHatyai.jpg')},
//     { place01: 'Chiangmai', code: '50000', picture:require('../imgChaingmai.jpg')},
//     { place01: 'Pattaya', code: '20000', picture:require('../imgChonburi.jpg')},

// ]

// const AvailableZipItems02 = [
//     { place02: 'Trang', code: '92000', picture:require('../imgTrange.jpg')},
//     { place02: 'Khonkaen', code: '40000', picture:require('../imgKhonkaen.jpg')},
//     { place02: 'Pattaya', code: '20000', picture:require('../imgChonburi.jpg')},

// ]


// renderItem(navigation, place01, place02, code) {
//     var cont = 0;
//     for (i = 0; i <= 23; i++) { 
//       return (
//         <TouchableHighlight onPress={() => {
//             navigation.navigate('Weather', {zipCode: code})
//             }}>
//         <View style={styles.bgText01}>
//         <Text style={styles.Ctext01}>{place01} {code}</Text>
//         </View>
//         </TouchableHighlight>

//         <TouchableHighlight onPress={() => {
//             navigation.navigate('Weather', {zipCode: code})
//             }}>
//             <View style={styles.bgText02}>
//                 <Text style={styles.Ctext01}>{place02} {code}</Text>
//             </View>
//         </TouchableHighlight>
//       );       
//     }
//   }


// const ZipItem = ({place01, place02, code, navigation}) => (
//           <TouchableHighlight onPress={() => {
//               navigation.navigate('Weather', {zipCode: code})
//               }}>
//           <View style={styles.bgText01}>
//           <Text style={styles.Ctext01}>{place01} {code}</Text>
//           </View>
//           </TouchableHighlight>
  
          // <TouchableHighlight onPress={() => {
          //     navigation.navigate('Weather', {zipCode: code})
          //     }}>
//               <View style={styles.bgText02}>
//                   <Text style={styles.Ctext01}>{place02} {code}</Text>
//               </View>
//           </TouchableHighlight>     
// )

// export default class ZipCodeScreen extends Component {
//     render() {
//       return (
//         <View style={{
//           flex: 1,
//         //   width: '100%',
//           height: '100%',
//           backgroundColor: '#CCFF33',
//           justifyContent: 'flex-start',
//           alignItems: 'stretch',
//           alignContent: 'stretch',
//           alignSelf: 'auto',
//         }}>
//           <View style={{
//             flex: 1,
//             flexDirection: 'row',
//             // width: '100%',
//             height: '10%',
//             backgroundColor: '	#CCFF33',
//             justifyContent: 'flex-start',
//             alignItems: 'stretch',
//             alignContent: 'stretch',
//             alignSelf: 'auto',
//           }}>
//             <View style={{
//               flex: 1,
//               flexDirection: 'row',
//               width: '50%',
//               height: '25%',
//               backgroundColor: '#CCCCFF',
//               justifyContent: 'flex-start',
//             alignItems: 'stretch',
//             alignContent: 'stretch',
//             alignSelf: 'auto',
//             }} > 
//             <Text>  Hello   </Text>   
            
//             </View>
//             <View style={{
//               flex: 1,
//               flexDirection: 'row',
//               width: '50%',
//               height: '25%',
//               backgroundColor: '#CC3333',
//               justifyContent: 'flex-start',
//             alignItems: 'stretch',
//             alignContent: 'stretch',
//             alignSelf: 'auto',
//             }} />
//           </View>
//           <View style={{
//             flex: 1,
//             flexDirection: 'row',
//             width: '100%',
//             height: '20%',
//             backgroundColor: '	#CCFF33',
//             justifyContent: 'flex-start',
//             alignItems: 'stretch',
//             alignContent: 'stretch',
//             alignSelf: 'auto',
//           }}>
//             <View style={{
//               flex: 1,
//               flexDirection: 'row',
//               width: '50%',
//               height: '20%',
//               backgroundColor: '#CCCCFF',
//               justifyContent: 'flex-start',
//             alignItems: 'stretch',
//             alignContent: 'stretch',
//             alignSelf: 'auto',
//             }} />
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'row',
//                 width: '50%',
//                 height: '20%',
//                 backgroundColor: '#CC3333',
//                 justifyContent: 'flex-start',
//                 alignItems: 'stretch',
//                 alignContent: 'stretch',
//                 alignSelf: 'auto',
//             }} />
//           </View>
//         </View>
//       );
//     }
//   };
  export default function ZipCodeScreen(place, code01, code02){
    const navigation = useNavigation()
      return (
        
        <ImageBackground source={require('../bg02.jpg')} style={styles.backdrop}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: '#CCFF33',
          }}>
            <View style={styles.bgTextBig}>
                <View style={styles.bgTextColumn}>
                  <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '90110'})
                  }}>
                    <Text style={styles.Ctext01}>Hatyai</Text>
                  </TouchableHighlight>
                </View>
              
              <View style={styles.bgTextColumn}>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '92000'})
                  }}>
                    <Text style={styles.Ctext01}>Trang</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.bgTextColumn}>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '50000'})
                  }}>
                  <Text style={styles.Ctext01}>Chiangmai</Text>
                </TouchableHighlight>
              </View>
              
              <View style={styles.bgTextColumn}>
              <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '40000'})
                  }}>
              <Text style={styles.Ctext01}>Khonkaen</Text>
              </TouchableHighlight>
              </View>
            </View>

            <View style={styles.bgTextBig}>
              <View style={styles.bgTextColumn}>
              <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '20000'})
                  }}>
              <Text style={styles.Ctext01}>Pattaya</Text>
              </TouchableHighlight>
              </View>
              <View style={styles.bgTextColumn}>
              <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '57000'})
                  }}>
              <Text style={styles.Ctext01}>ChiangRai</Text>
              </TouchableHighlight>
              </View>
              <View style={styles.bgTextColumn}>
              <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '81000'})
                  }}>
              <Text style={styles.Ctext01}>Krabi</Text>
              </TouchableHighlight>
              </View>
              <View style={styles.bgTextColumn}>
              <TouchableHighlight onPress={() => {
                    navigation.navigate('Weather', {zipCode: '96000'})
                  }}>
                  <Text style={styles.Ctext01}>Narathiwat</Text>
              </TouchableHighlight>
              </View>
            </View>
              
          </View>
        </ImageBackground>

      )
  }
    
// export default function ZipCodeScreen(place01, place02, code){
//     const navigation = useNavigation()
//     return (
        // <View style={styles.bgTextBig}>
        //     <ImageBackground source={require('../bg02.jpg')} style={styles.backdrop}>
        //         {/* <View style={styles.bgTextBig}> */}

        //             <TouchableHighlight onPress={() => {
        //                 navigation.navigate('Weather', {zipCode: code})
        //                 }}>
        //                 <View style={styles.bgText01}>
        //                     <Text style={styles.Ctext01}>{place01} {code}</Text>
        //                 </View>
        //             </TouchableHighlight>

        //             <TouchableHighlight onPress={() => {
        //                 navigation.navigate('Weather', {zipCode: code})
        //                     }}>
        //                     <View style={styles.bgText02}>
        //                         <Text style={styles.Ctext01}>{place02} {code}</Text>
        //                     </View>
        //             </TouchableHighlight>
        //         {/* </View> */}
        //     </ImageBackground>
        // </View>
        
    // )
// }

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        // paddingTop : '20%',
        // paddingLeft: '10%',
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
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: '#CCFF33',
        // justifyContent: 'flex-start',
        // alignItems: 'stretch',
        // alignContent: 'stretch',
        // alignSelf: 'auto',
    },

    // Color

    Ctext01: {
        color: '#FFFFFF',  
        fontSize: 20,
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingLeft: '30%',    
        // justifyContent: 'stretch',
        // paddingTop: '10%',
    },

    White: {
        color: '#FFFFFF',
    },

    bgTextBig: {
      flex: 1,
      width: '100%',
      height: '70%',
      flexDirection: "column",
      // backgroundColor: '#CCFF33',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      alignSelf: 'auto',
    },

    bgTextColumn: {
      flex: 1,
      width: '100%',
      height: '20%',
      // backgroundColor: '#CCCCFF',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'stretch',
      alignContent: 'stretch',
      alignSelf: 'auto',
    },

    bgTextColumn02: {
      flex: 1,
      width: '100%',
      height: '20%',
      flexDirection: 'row',
      backgroundColor: '#CC3333',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      alignSelf: 'auto',
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

