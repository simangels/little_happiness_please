import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import Modal from "react-native-modal";
import RefillModels from './RefillModels';
import { get_tasks } from './../apis/tasks';





export default function ShowTasks() {

    const [value, set_value] = useState();


    useEffect(() => {
        get_tasks(set_value);
        console.log(value)
    }, []);


    var DATA = value;



    // var DATA = [
    //     {
    //         "id": 10,
    //         "name": "Health- Execise",
    //         "description": "Regular physical activity can improve your muscle strength \
    //                         and boost your endurance. Exercise delivers oxygen and nutrients \
    //                         to your tissues and helps your cardiovascular system work more \
    //                         efficiently. And when your heart and lung health improve, you \
    //                         have more energy to tackle daily chores.",
    //         "filled_count": 10,
    //         "duration_left": Date.parse('2022-02-20 18:24:42.133734'),
    //         "avg_value": 6,
    //         "last_entry": 18
    //     }, {
    //         "id": 12,
    //         "name": "DS",
    //         "description": "I have to learning GAN.",
    //         "filled_count": 10,
    //         "duration_left": Date.parse('2022-02-20 18:24:42.133734'),
    //         "avg_value": 6,
    //         "last_entry": 18
    //     }
    //     , {
    //         "id": 14,
    //         "name": "DS",
    //         "description": "I have learning GPT.",
    //         "filled_count": 10,
    //         "duration_left": Date.parse('2022-02-20 18:24:42.133734'),
    //         "avg_value": 6,
    //         "last_entry": 18
    //     }
    //     , {
    //         "id": 15,
    //         "name": "English",
    //         "description": "English Course.",
    //         "filled_count": 10,
    //         "duration_left": Date.parse('2022-02-20 18:24:42.133734'),
    //         "avg_value": 6,
    //         "last_entry": 18
    //     }

    // ]



    const DrawLine = params => {
        return (
            <View style={{ borderWidth: 1, borderColor: "white", width: "100%", marginBottom: 10 }} />

        )
    }

    render_cards = item => {
        var index = item.index
        var params = item.item

        return (
            <View style={styles.card_container_styles} >


                <View style={styles.show_card_styles} >

                    {/* <Text>{params.id}</Text> */}

                    <Text
                        style={styles.name_text_styles}>
                        {params.name}
                    </Text>

                    <Text
                        style={styles.description_text_styles} >
                        {params.description}
                    </Text>

                    <DrawLine />


                    <Text
                        style={styles.stats_fields_text_styles} >
                        Filled Count {params.filled_count}
                    </Text>

                    <Text
                        style={styles.stats_fields_text_styles} >
                        Time left {params.duration_left}
                    </Text>

                    <Text
                        style={styles.stats_fields_text_styles} >
                        Average count {params.avg_value}
                    </Text>

                    <Text
                        style={styles.stats_fields_text_styles} >
                        Last entry {params.last_entry}
                    </Text>

                </View>



                <RefillModels data={params.question_id_and_question_arr} />


            </View>



        );


    }



    return (

        <FlatList
            data={DATA}
            renderItem={render_cards}
            keyExtractor={item => item.task_id}
            contentContainerStyle={styles.all_cards_container_styles}
            bounces={true}
        />
    );

}




const styles = StyleSheet.create({

    stats_fields_text_styles: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
        fontWeight: "500"

    },

    name_text_styles: {
        fontSize: 25,
        color: "black",
        fontWeight: "500"


    },
    description_text_styles: {
        fontSize: 18,
        fontWeight: "400"

    },



    all_cards_container_styles: {
        // backgroundColor: "green",
    },
    card_container_styles: {
        // backgroundColor: "green",
        margin: 10
    },

    text_refill_styles: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        textTransform: "capitalize",
    },



    show_card_styles: {
        width: "90%",

        backgroundColor: 'rgb(174, 192, 243)',

        alignSelf: "center",

        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        padding: 30,
        minWidth: Dimensions.get("window").width * 0.9,

        elevation: 1


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