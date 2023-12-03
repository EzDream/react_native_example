/**
 * Created by zuoxiansheng on 3/12/23
 */
import { React } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { themeColors } from '../../theme'
import Restaurant from './Restaurant'

export default function FeatureRow({title, description, restaurants}) {
  return (
    <View className="flex-col">
      <View className="flex-row p-2 items-center">
        <View className="flex-1">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-sm text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See
            All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal className="bg-transparent">
        {
          restaurants.map((restuarant, index) => {
            return (
              <Restaurant restaurant={restuarant} key={index}/>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
