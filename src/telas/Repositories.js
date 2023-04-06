import React, { useState } from "react";
import axios from 'axios';
import { Text, TextInput, StyleSheet, Button } from "react-native";

const Repositories = () => {

    const [repositories, setRepositories] = useState([]);
    const [username, setUserName] = useState('')
    
    const searchRepositories = () => {

        const request_url = `https://api.github.com/users/${username}/repos`;

        axios.get(request_url)
        .then((res) => {
            let newRepositories = [...repositories];
            res.forEach(repo => {
                newRepositories.push({
                    "name": repo.name,
                    "date_of_creation": repo.created_at,
                    "last_update": repo.updated_at
                })
            });
            setRepositories(...newRepositories)
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
        

    }

    return (
        <>
        
        <Text style={styles.pageTitle}>
            Github Repository Consulter
        </Text>
        <TextInput 
        onChangeText={username => setUserName(username)}
        style={styles.textInput} 
        placeholder="Insira o username do Github">
        </TextInput>

        {
            repositories.map((repo) => {
                <>
                    <Text>{repo.name}</Text>
                    <Text>{repo.date_of_creation}</Text>
                    <Text>{repo.last_update}</Text>
                </>
            })
        }

        <Button
            onPress={() => searchRepositories()}
            title="Pesquisar"
            accessibilityLabel="Learn more about this purple button"  
        />
        </>
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
    }
})

export default Repositories;