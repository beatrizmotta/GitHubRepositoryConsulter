import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Text, TextInput, StyleSheet, Button, View, ScrollView } from "react-native";

const ShowRepositories = ({ navigation, route }) => {

    useEffect(() => {
        searchRepositories();
    }, [])

    interface RepoInfo {
        id: Number,
        name: string,
        created_at: string,
        updated_at: string
    }

    interface Repository {
        id: Number,
        name: string,
        date_of_creation: string,
        last_update: string
    }

    const [repositories, setRepositories] = useState([]);

    const searchRepositories = async () => {

        const request_url = `https://api.github.com/users/${route.params.username}/repos`;

        axios.get(request_url).then((response) => {
            const data = Array.from(response.data);
            const arr = [];

            data.forEach((repo: RepoInfo) => {

                const info: Repository = {
                    id: repo.id,
                    name: repo.name,
                    date_of_creation: repo.created_at,
                    last_update: repo.updated_at
                }

                arr.push(info);
            })

            setRepositories(oldArray => [...oldArray, ...arr])


        })
            .catch(error => console.log(error));



    }

    return (

        <ScrollView contentContainerStyle={styles.container}>


            <Text style={styles.title}>
                Repositórios de {route.params.username}
            </Text>


            {
                repositories.map((repo: Repository) => {
                    return (
                        <View style={styles.repository} key={`${repo.id}${repo.date_of_creation}`}>
                            <Text style={styles.repositoryText}>Nome: {repo.name}</Text>
                            <Text style={styles.repositoryText}>Criação: {repo.date_of_creation}</Text>
                            <Text style={styles.repositoryText}>Último update: {repo.last_update}</Text>
                        </View>
                    )
                })
            }

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontFamily: "KonkhmerSleokchher",
        fontSize: 30,
        width: '50%',
        lineHeight: 39,
        textAlign: 'center',
        marginTop: "10%"
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
        marginTop: '10%',
        backgroundColor: "tomato",
        borderRadius: 8,
        padding: 10
    },
    repositoryText: {
        color: "white"
    }
})

export default ShowRepositories;