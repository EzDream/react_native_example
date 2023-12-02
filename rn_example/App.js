import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import MyFunctionComponent from './components/MyFunctionComponent'
import { MyClassComponent } from './components/MyClassComponents'
import { useState } from 'react'
import Navigation from './navigation'

export default function App() {
  return (
    <Navigation/>
  )
}
