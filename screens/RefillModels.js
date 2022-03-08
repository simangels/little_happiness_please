import React, { useEffect, useState } from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet, Dimensions, TextInput, ScrollView } from "react-native";
import Modal from "react-native-modal";

function RefillModels(props) {
    const [isModalVisible, setModalVisible] = useState(false);

    const [answers, setAnswers] = useState({});


    console.log(answers)

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setAnswers({});
    };


    const setAnswersHandler = (id, answer) => {
        console.log(answers)
        answers[id] = answer
    }


    const Data = props.data


    // const Data = [
    //     {
    //         "id": 10,
    //         "question": "What are you doing?",
    //     },
    //     {
    //         "id": 11,
    //         "question": "How many miles did you ran today?",
    //     }
    //     ,
    //     {
    //         "id": 12,
    //         "question": "How you feeling today?",
    //     }
    // ]




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


    const QuestionAnswers = props => {
        return (
            <View>
                <Text>
                    {props.question}
                </Text>
                <TextInput
                    value={answers.questionId}
                    style={styles.textinputStyles}
                    onChangeText={(e) => setAnswersHandler(props.questionId, e)}
                />
            </View>

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
                        <ScrollView>
                            {Data.map((item, index) => {
                                return (
                                    <QuestionAnswers key={item.question_id} question={item.question} questionId={item.id} />
                                )
                            })}
                        </ScrollView>

                    </View>

                    <RefillButton overRideColor='rgba(19, 217, 161, 1)' />


                </View>
            </Modal>
        </View >
    );
}


const styles = StyleSheet.create({

    textinputStyles: {
        borderWidth: 1,
        borderColor: "black",
        padding: 0,
        margin: 15
    },


    modelContainerStyles: {
        flex: 1,
        justifyContent: "flex-end"
    },

    ModelContentStyles: {
        width: "100%",
        minHeight: "50%",

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