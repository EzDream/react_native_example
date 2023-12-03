/**
 * Created by zuoxiansheng on 3/12/23
 */
import { React } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

export default function Restaurant({restaurant}) {
  return (
    <TouchableWithoutFeedback>
      <View className="mb-5 rounded-3xl mr-6 bg-white shadow">
        <Image source={restaurant.image} className="w-64 h-36 rounded-t-3xl"/>
        <View className="px-2 pb-2 space-y-2">
          <Text className="font-bold text-lg pt-2">{restaurant.name}</Text>
          <View
            className="flex-row items-center mb-2 mt-1 space-x-1 rounded-3xl">
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
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})
