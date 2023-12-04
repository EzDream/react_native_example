/**
 * Created by zuoxiansheng on 4/12/23
 */
import { React, useLayoutEffect } from 'react'
import {
  Image,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { featured } from '../../constant'
import { ArrowLeft, Minus } from 'react-native-feather'
import { themeColors } from '../../theme'
import { globalStyles } from '../../GlobalStyles'

export default function CartScreen({navigation}) {
  const restaurant = featured.restaurants[0]
  return (
    <SafeAreaView className="bg-white flex-1">
      {/*header*/}
      <View className="relative mt-4">
        <TouchableOpacity
          className="absolute top-1 left-2 p-2 rounded-full z-50"
          style={{backgroundColor: themeColors.bgColor(1)}}
          onPress={() => {
            navigation.goBack()
          }}>
          <ArrowLeft
            strokeWidth={3}
            stroke="white"/>
        </TouchableOpacity>
        <View>
          <Text className="text-center text-lg font-bold">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/*deliver*/}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}}
            className="flex-row items-center justify-between px-2 mt-2">
        <Image source={require('../../assets/food_app/images/bikeGuy.png')}
               className="w-16 h-16 rounded-full"/>
        <Text className="font-bold">Deliver in 20~20~30
          minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold"
                style={{color: themeColors.bgColor(1)}}>Change</Text>
        </TouchableOpacity>
      </View>
      {/*Order List*/}
      <ScrollView>
        {
          restaurant.dishes.map((dish, index) => {
            return (
              <View
                className="flex-row m-2 bg-white p-3 rounded-xl items-center"
                style={globalStyles.shadow}>
                <Text className="font-bold mr-2"
                      style={{color: themeColors.text}}>2 x</Text>
                <Image source={dish.image}
                       className="w-14 h-14 rounded-full"/>
                <View className="flex-row flex-1 items-center">
                  <Text
                    className="flex-1 ml-1 font-bold text-l">{dish.name}</Text>
                  <Text className="font-bold mr-2">$10</Text>
                  <TouchableOpacity className="rounded-full p-0.5"
                                    style={{
                                      backgroundColor: themeColors.bgColor(1),
                                    }}>
                    <Minus width={20} height={20} stroke="white"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      {/*  Checkout*/}
      <View
        className="absolute bottom-0 left-0 right-0 p-6 rounded-t-3xl space-y-3"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-bold">Subtotal</Text>
          <Text className="text-gray-700 font-bold">$20</Text>
        </View>
        <TouchableOpacity className="py-3 rounded-full"
                          style={{backgroundColor: themeColors.bgColor(1)}}>
          <Text
            className="text-center text-white text-lg font-extrabold">Place
            Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({})
