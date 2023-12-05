import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import MyFunctionComponent from './components/MyFunctionComponent'
import { MyClassComponent } from './components/MyClassComponents'
import { useState } from 'react'
import Navigation, { Routes } from './navigation'
import HomeScreen from './screens/FoodApp/HomeScreen'
import RestaurantScreen from './screens/FoodApp/RestaurantScreen'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export default function App() {
  return (
//    <Provider store={store}>
    <Navigation/>
//    </Provider>
  )
}
