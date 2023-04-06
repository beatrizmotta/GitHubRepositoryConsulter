import React from "react";
import { Text, TextInput, StyleSheet, Button } from "react-native";

const Repositories = () => {
    return (
        <>
        
        <Text style={styles.pageTitle}>
            Github Repository Consulter
        </Text>
        <TextInput style={styles.textInput} 
        placeholder="Insira o username do Github">

        </TextInput>

        <Button
            //   onPress={onPressLearnMore}
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