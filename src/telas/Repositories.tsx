import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from "react-native";
import ShowRepositories from "./ShowRepositories";

const Repositories = ({navigation}) => {


    const [username, setUserName] = useState<String>('')
    const [errorMessage, setErrorMessage] = useState<String>(""); 

    const onPress = ():void => {
        if (username === "") {
            setErrorMessage("Insira algum nome de usuário!");
            return;
        } 

        const request_url = `https://api.github.com/users/${username}/repos`;
        axios.get(request_url)
            .then(() => {
            
                navigation.navigate("Meus Repositórios", {username: username});
            
            })
            .catch(() => {
                
                setErrorMessage("Usuário não encontrado.")

            });
    }




    return (
        <View style={styles.container}>

        <View style={styles.inputBox}>
            <Text style={styles.helperText}>
                Insira o nome de usuário do GitHub
            </Text>
            <TextInput 
            onChangeText={username => setUserName(username)}
            style={styles.textInput} 
            placeholder="Insira o username do Github">
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={{color: "white", fontWeight: "bold"}}>
                    Buscar
                </Text>
            </TouchableOpacity>
            {
                errorMessage && <Text style={styles.errorMessage}>
                                    {errorMessage}
                                </Text>

            }
        </View>

{/* 
        <Button
            onPress={() => navigation.navigate("ShowRepositories", {username: username})}
            title="Pesquisar"
            accessibilityLabel="Learn more about this purple button"  
        /> */}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "KonkhmerSleokchher",
        fontSize: 30,
        color: "black",
        lineHeight: 40,
        textAlign: "center"
    },
    inputBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "20%"
    },
    textInput: {
        height: 40,
        elevation: 5,
        shadowColor: '#000000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 0,
        padding: "2%",
        textAlign: 'center'
    }, 
    helperText: {
        fontSize: 18
    },
    button: {
        padding: 10,
        borderRadius: 6,
        fontWeight: "bold",
        backgroundColor: "tomato"
    },
    errorMessage: {
        fontStyle: "italic"
    }
    
})

export default Repositories;