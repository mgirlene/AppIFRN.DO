import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{title: "Login"}} />
            <Stack.Screen name="Home" component={Home} options={{title: "Home"}} />
        </Stack.Navigator>
    )
}