import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList, Image, ImageBackground, Dimensions } from 'react-native';







export default function App() {


  return (

    <View style={styles.container_styles} >

      <View
        style={styles.background_styles}
      >


        <ImageBackground
          style={styles.user_images_styles}
          source={{
            uri: 'https://cutewallpaper.org/21/luffy-profile-pic/Monkey-D-Luffy-YouTube.jpg',
          }}

        >
          <View style={styles.text_background_styles}>
            <Text>Jorawar Singh </Text>
          </View>

        </ImageBackground>


      </View>


    </View>
  );

}




const styles = StyleSheet.create({



  text_background_styles: {
    backgroundColor: "#ccc",
    // justifyContent: "flex-end",
    // alignSelf: "flex-end",
    // justifyContent: "flex-end",
    alignItems: "flex-end"
  },


  user_images_styles: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 3,

    justifyContent: "flex-end",

    overflow: "hidden",

    borderWidth: 4,
    borderColor: "#ccc"


  },



  background_styles: {

    width: "50%",
    height: "50%",
    backgroundColor: "rgba(78, 239, 164, 1)",

    alignSelf: "center",

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",


    elevation: 1


  },

  container_styles: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(234, 255, 162, 0.8)",
    justifyContent: "center"
  }


})