import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/Routes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar style='dark' />
        <Routes/>
    </NavigationContainer>
  )
}
