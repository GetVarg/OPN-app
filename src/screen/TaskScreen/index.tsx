import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated } from "react-native";
import CardRecanto from "../../../assets/component/CardRecanto";
import CardLar from "../../../assets/component/CardLar";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Product } from "../../types/product";
import Task from "../../types/Task";
import { useRoute } from '@react-navigation/native';
import completedTaskHttp from "../../services/completedTaskHttp";
import cancelTasksHttpService from "../../services/cancelTasksHttpService";
// import cancelTasksHttpService from "../../src/services/cancelTasksHttpService";

const styles = StyleSheet.create({
    screenStyle: {
        top: 40,
        // flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#C90000',
        flex: 1,
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

    card:{
        top: 40,
        height: "70%",
        backgroundColor: 'black',
        width: "95%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    buttonBox:{
        height: "10%",
        // backgroundColor: 'black',
        width: "90%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 20,
    },
    buttonLeft:{
        alignItems: 'center',
        right: 35,
        justifyContent: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "#aaadeb",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    buttonRight:{
        alignItems: 'center',
        justifyContent: 'center',
        left: 35,
        // alignSelf: 'flex-end',
        // position: 'absolute',
        height: 80,
        backgroundColor: "#ff2e3a",
        width: 80,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },

})

export default function TaskScreen(){
    const [carregando, setCarregando]=useState(true)
    const [dados, setDados]=useState<Task>()
    const [taskCounter, setTaskCounter] = useState(0)
    const useService = new completedTaskHttp()
    const useServiceCancel = new cancelTasksHttpService()

    function loadTask(){
        fetch(`http://teste-env.eba-tcxtgrep.us-east-1.elasticbeanstalk.com/api/Task/CreateRandomTask?IDN=${idn}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            const product = new Product(json.product.amount, json.product.name)
            const task = new Task(json.institutionName, json.goal, product)
            setDados(task)
        })
        .then(()=>console.log(dados))
        .catch((error) => console.log(error))
        .finally(() => setCarregando(false))
    }
    useEffect(()=>{
        loadTask()
    },[taskCounter]);

    const handleComplete = async () => {
        await useService.completed(idn)
        loadTask()
    }

    const handlePressX = async () => {
        await useServiceCancel.cancelTask(idn)
        loadTask()
    }

    const showCard = () => {
        if(carregando){
            return <View><Text>Carregando</Text></View>
        }
        else if (dados?.institutionName == "Recanto"){
            
            return <CardRecanto name={dados?.product.name} qtd={dados?.product.amount}/>
        }else{
            return <CardLar name={dados?.product.name} qtd={dados?.product.amount}/>
        }
    }
    const route = useRoute<any>();
    const {idn} = route.params;
    return(
        <View style={styles.screenStyle}>
            <View style={styles.card}>
                
                {showCard()}

            </View>
            
            <View style={styles.buttonBox}>
                <Pressable style={styles.buttonLeft} onPress={() => {handleComplete()}}>
                    <Icon name="check" size={25} color="black"/>
                </Pressable>
                <Pressable style={styles.buttonRight} onPress={() => {handlePressX()}}>
                    <Icon name="close" size={25} color="black" />
                </Pressable>
          
            </View>
        </View>
    )
}