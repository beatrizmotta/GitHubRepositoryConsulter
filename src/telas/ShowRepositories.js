import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Text, TextInput, StyleSheet, Button, View, ScrollView } from "react-native";

const ShowRepositories = ({navigation, route}) => {

    useEffect(() => {
        searchRepositories();
    }, [])

    const [repositories, setRepositories] = useState([]);
    const searchRepositories = async () => {

        const request_url = `https://api.github.com/users/${route.params.username}/repos`;

        axios.get(request_url).then((response) => {
            const data = Array.from(response.data);
            const arr = [];

            data.forEach((repo) => {
                arr.push({
                        "id": repo.id,
                        "name": repo.name, 
                        "date_of_creation": repo.created_at,
                        "last_update": repo.updated_at
                });
            })

            setRepositories(oldArray => [...oldArray, ...arr])

            console.log(arr)

        })
        .catch(error => console.log(error));
        
        

    }

    return (

        <View style={styles.container}>
        <ScrollView>

        
        <Text style={styles.pageTitle}>
            Repositórios de {route.params.username}
        </Text>


        {
            repositories.map((repo) => {
                return (
                    <View style={styles.repository} key={repo.id}>
                        <Text>Nome: {repo.name}</Text>
                        <Text>Criação: {repo.date_of_creation}</Text>
                        <Text>Último update: {repo.last_update}</Text>
                    </View>
                    )
                })
            }

        {/* <Button
            onPress={() => navigation.navigate("ShowRepositories")}
            // onPress={() => searchRepositories()}
            title="Pesquisar"
            accessibilityLabel="Learn more about this purple button"  
        /> */}
        </ScrollView>
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
    repository: {
        marginTop: '10%'
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

export default ShowRepositories;