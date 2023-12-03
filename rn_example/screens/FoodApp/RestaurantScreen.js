/**
 * Created by zuoxiansheng on 2/12/23
 */
import { React, useLayoutEffect } from 'react'
import {
  Image, SafeAreaView,
  ScrollView,
  StyleSheet, Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ArrowLeft, MapPin } from 'react-native-feather'
import { themeColors } from '../../theme'
import { StatusBar } from 'expo-status-bar'
import DishRow from '../../components/food_app/DishRow'
import Cart from '../../components/food_app/Cart'

export default function RestaurantScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // 这会隐藏导航栏
    })
  }, [navigation])

  const {params} = useRoute()
  console.log(params)
  return (
    <View className="flex-1">
      <StatusBar style="dark"></StatusBar>
      <Cart/>
      <ScrollView>
        <View className="relative">
          <Image source={params.image} className="w-full h-72"/>
          <SafeAreaView className="absolute top-5 left-4 ">
            <TouchableOpacity
              className="p-2 rounded-full bg-white"
              onPress={() => {
                navigation.goBack()
              }}>
              <ArrowLeft
                strokeWidth={3}
                stroke={themeColors.bgColor(1)}/>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
              className="bg-gray-100 -mt-12 pt-8 px-3">
          <View>
            <Text className="text-3xl font-bold">{params.name}</Text>
            <View className="flex-row items-center space-x-2 py-1">
              <View className="flex:  space-y-2">
                <View
                  className="flex-row items-center space-x-1 rounded-3xl">
                  <Image
                    source={require(
                      '../../assets/food_app/images/fullStar.png')}
                    className="w-4 h-4"/>
                  <Text className="text-xs">
                    <Text className="text-green-700">{params.stars}</Text>
                    <Text>({params.reviews}) • <Text
                      className="font-semibold">{params.category}</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPin stroke="gray" width="15" height="15"/>
                <Text className="text-xs text-gray-700">{params.address}</Text>
              </View>
            </View>
          </View>

          <Text className="text-gray-500">{params.description}</Text>
        </View>
        <View className="px-3 flex-col mt-5">
          <Text className="text-3xl font-bold mb-1">
            Menu
          </Text>
          {
            params.dishes.map((dish, index) => {
              return <DishRow item={dish} key={index}/>
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
