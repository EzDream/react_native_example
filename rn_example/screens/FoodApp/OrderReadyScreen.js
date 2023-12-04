/**
 * Created by zuoxiansheng on 4/12/23
 */
import { React, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Routes } from '../../navigation'

export default function OrderReadyScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.DeliveryScreen)
    }, 2000)
  }, [])
  return (
    <View className="flex flex-1 items-center justify-center">
      <Image source={require('../../assets/food_app/images/delivery.gif')}
             className="w-80 h-80"/>
    </View>
  )
}

const styles = StyleSheet.create({})
