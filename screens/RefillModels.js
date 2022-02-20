import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";

function RefillModels() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    const RefillButton = props => {
        return (
            <TouchableOpacity
                style={{ ...styles.refill_styles, backgroundColor: props.overRideColor }}
                onPress={toggleModal}
            >
                <Text style={styles.text_refill_styles}>
                    Refill
                    </Text>
            </TouchableOpacity>
        );
    }


    return (
        <View style={{ flex: 1 }}>

            <RefillButton overRideColor='rgb(228, 184, 218)' />

            <Modal
                isVisible={isModalVisible}
                animationIn={"slideInUp"}
                backdropColor="black"
                backdropOpacity={0.7}
                backdropTransitionInTiming={700}
                backdropTransitionOutTiming={700}

                swipeDirection="down"
                onSwipeComplete={toggleModal}

            >
                <View style={styles.modelContainerStyles}>
                    <View style={styles.ModelContentStyles} >

                        <Text>Hello!</Text>

                    </View>

                    <RefillButton overRideColor='rgba(19, 217, 161, 1)' />


                </View>
            </Modal>
        </View >
    );
}


const styles = StyleSheet.create({


    modelContainerStyles: {
        flex: 1,
        justifyContent: "flex-end"
    },

    ModelContentStyles: {
        width: "100%",
        height: "80%",

        backgroundColor: "rgba(149, 165, 166,1)",

        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,

        padding: 30,

        alignSelf: "flex-end"
    },


    text_refill_styles: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        textTransform: "capitalize",
    },



    refill_styles: {
        width: 100,
        height: 50,

        backgroundColor: 'rgb(228, 184, 218)',

        alignSelf: "center",
        minWidth: Dimensions.get("window").width * 0.9,

        borderBottomLeftRadius: 1000,
        borderTopRightRadius: 1000,
        elevation: 10,

        justifyContent: "center"


    }

})

export default RefillModels;