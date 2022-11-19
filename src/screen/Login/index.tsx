import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert } from "react-native";
import { useState } from "react";
import { Pressable } from "react-native";
import { Product } from "../../types/product";
import Task from "../../types/Task";
import UserHttpService from "../../services/UserHttpService";
const styles = StyleSheet.create({
    screenStyle: {
        marginTop: '20%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerInfo: {
        marginTop: 30,
        height: '50%',
        width: '90%',
    },
    imageConteiner: {
        height: 225,
        width: 225,
        borderRadius: 225/2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        height: 220,
        width: 220,
        borderRadius: 220/2,
    },
    inputBox:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    input: {
        marginTop: 40,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        
    },
    buttonStyle:{
        height: 35,
        width: 120,
        borderRadius: 40,
        backgroundColor: '#C90000',
        top: 10,
        flexDirection: 'column',
        alignSelf: 'center',
    }

})

export default function Login( {navigation}:any ){
    const [userIDN, setUDN] = useState("");
    const [dados, setDados]=useState<Task>()
    const [carregando, setCarregando]=useState(true)
    const userService = new UserHttpService();
    
    const handlePress = async () => {
        await userService.login(userIDN);
        navigation.navigate('Task', {idn: userIDN});
    }

    return(
        <View style={styles.screenStyle}>
            <View style={styles.imageConteiner}>
                <Image source={require("../../../assets/img/Santa.jpg")} style={styles.image}/>
            </View>
            <View style={styles.containerInfo}>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUDN}
                        value={userIDN}
                        keyboardType="numeric"
                        placeholder="Digite seu IDN"
                    />

                </SafeAreaView>
                <View>

                    <Pressable style={styles.buttonStyle} onPress={() => handlePress() }>
                        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Gerar Task</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}