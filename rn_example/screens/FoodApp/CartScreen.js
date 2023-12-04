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
import { ArrowLeft } from 'react-native-feather'
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
      <ScrollView>
        {
          restaurant.dishes.map((dish, index) => {
            return (
              <View className="flex-row m-2 bg-white p-3 rounded-xl"
                    style={globalStyles.shadow}>
                <Image source={dish.image} className="w-20 h-20 rounded-full"/>
                <Text>{dish.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
