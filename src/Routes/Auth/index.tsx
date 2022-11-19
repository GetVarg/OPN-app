import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../screen/Login";
import TaskScreen from "../../screen/TaskScreen";

const Stack = createNativeStackNavigator()

export default function Routes({}){
    return(
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
			<Stack.Screen name='Task' component={TaskScreen}/>
        </Stack.Navigator>
    )
}