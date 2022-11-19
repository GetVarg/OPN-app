import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    cardConteiner:{
        height: "100%",
        width: "100%",
        backgroundColor: '#176717',
        borderRadius: 10,
        alignItems: 'center',

    },
    taskConteiner: {
        width: "98%",
        height: "65%",
        backgroundColor: '#A60000',
        position: 'absolute',
        bottom: "1%",
        alignItems: 'center',
        borderRadius: 10,

    },
    nameText:{
        top: 35,
        alignItems: 'center',
    },
    qtdText:{
        top:50,
        alignItems: 'center',
    },
    imageConteiner: {
        top: 10,
        alignSelf: 'center',
        
        // position: 'absolute',
        height: 124,
        width: 160,
        borderRadius: 300/2,
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 150,
        borderRadius: 100/2,
    },
})

export default function({name, qtd}:any){
    return(
        <View style={styles.cardConteiner}>
            <View style={styles.imageConteiner}>
                <Image source={require("./../../img/LarLogo.jpeg")} style={styles.image}/>
            </View>
            <View style={styles.taskConteiner}>
                <View style={styles.nameText}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>O que voce deve pegar?</Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{name}</Text>
                </View>
                <View style={styles.qtdText}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Quantas unidades voce deve pegar?</Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{qtd}</Text>
                </View>
            </View>
        </View>
    )
}