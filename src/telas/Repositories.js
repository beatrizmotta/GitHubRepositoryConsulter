import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Text, TextInput, StyleSheet, Button, View } from "react-native";

const Repositories = ({navigation}) => {

    // useEffect(() => {
    //     const request_url = `https://api.github.com/users/beatrizmotta/repos`;
    //     axios.get(request_url).then((response) => {
    //         console.log(response.data);
    //       });

    // }, [])


    const [username, setUserName] = useState('')
    


    return (
        <View style={styles.container}>
        
        <Text style={styles.pageTitle}>
            Github Repository Consulter
        </Text>
        <TextInput 
        onChangeText={username => setUserName(username)}
        style={styles.textInput} 
        placeholder="Insira o username do Github">
        </TextInput>

        <Button
            onPress={() => navigation.navigate("ShowRepositories", {username: username})}
            // onPress={() => searchRepositories()}
            title="Pesquisar"
            accessibilityLabel="Learn more about this purple button"  
        />
        </View>
    )

}

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 30,
        width: '50%',
        textAlign: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '60%',
        marginTop: '60%',
        textAlign: 'center'
    }, 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: "red",
        // backgroundColor: 'blue',
        alignItems: 'center',
        // marginTop: '15%',
        justifyContent: 'flex-start',
      }
})

export default Repositories;