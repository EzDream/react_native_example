/**
 * Created by zuoxiansheng on 3/12/23
 */
import { React } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Restaurant({restaurant}) {
  return (
    <TouchableOpacity>
      <View className="mb-8 bg-amber-500 rounded-3xl shadow-lg">
        <Image source={restaurant.image} className="w-64 h-36 rounded-t-3xl"/>
        <Text>{restaurant.name}</Text>
        <View className="flex-row items-center mb-2 mt-1 space-x-1">
          <Image source={require('../../assets/food_app/images/fullStar.png')}
                 className="w-4 h-4"/>
          <Text className="text-xs">
            <Text className="text-green-700">{restaurant.stars}</Text>
            <Text>({restaurant.reviews}) • <Text
              className="font-semibold">{restaurant.category}</Text>
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
