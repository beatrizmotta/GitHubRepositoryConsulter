import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


const Home = () => {

    

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Meus Repositórios do GitHub</Text>
            {/* <Text style={styles.subtitle}>Acesse seus repositórios do GitHub</Text> */}

            <TouchableOpacity style={styles.button} >
                <Text style={{fontWeight: "500"}}>Vamos começar</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "tomato",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: "KonkhmerSleokchher",
        fontSize: 30,
        color: "white",
        lineHeight: 40,
        textAlign: "center"
    },
    button: {
        padding: 10,
        borderRadius: 6,
        fontWeight: "bold",
        backgroundColor: "white"
    }
    
})

export default Home;