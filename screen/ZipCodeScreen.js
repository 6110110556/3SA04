import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Button, Linking, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

  export default function ZipCodeScreen(){
    const navigation = useNavigation()
      return (
        
        <ImageBackground source={require('../bg02.jpg')} style={styles.backdrop}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
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
              <View style={styles.bgTextColumn}></View>
              <Text style={styles.Ctext02}>CONTACT</Text>
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
                  navigation.navigate('Weather', {zipCode: '52000'})
                }}>
                  <Text style={styles.Ctext01}>Lampang</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.bgTextColumn}>
                <TouchableHighlight onPress={() => {
                  navigation.navigate('Weather', {zipCode: '53000'})
                }}>
                  <Text style={styles.Ctext01}>Phitsanulok</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.bgTextColumn}></View>
              <TouchableHighlight onPress={() =>Linking.openURL('https://github.com/6110110556/')}>
                  <Text style={{
                    color: '#FFFFFF',  
                    fontSize: 18,
                    paddingTop: '10%',
                    paddingBottom: '10%',
                    paddingLeft: '20%',
                    backgroundColor: "#9933FF",
                  }}>GITHUB ME 👇</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>

      )
  }
    
const styles = StyleSheet.create({
    
    backdrop: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },

    Ctext01: {
        color: '#FFFFFF',  
        fontSize: 20,
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingLeft: '20%',    
    },

    Ctext02: {
      color: '#FFFFFF',
      backgroundColor: '#9966FF',	  
      fontSize: 18,
      paddingTop: '10%',
      paddingBottom: '10%',
      paddingLeft: '20%',
    },

    bgTextBig: {
      flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: "column",
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      alignSelf: 'auto',
    },

    bgTextColumn: {
      flex: 1,
      width: '100%',
      height: '20%',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'stretch',
      alignContent: 'stretch',
      alignSelf: 'auto',
    },

})
