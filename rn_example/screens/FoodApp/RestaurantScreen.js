/**
 * Created by zuoxiansheng on 2/12/23
 */
import { React, useLayoutEffect } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet, Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ArrowLeft } from 'react-native-feather'
import { themeColors } from '../../theme'

export default function RestaurantScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // 这会隐藏导航栏
    })
  }, [navigation])

  const {params} = useRoute()
  console.log(params)
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image source={params.image} className="w-full h-72"/>
          <TouchableOpacity
            className="absolute top-8 left-4 bg-white p-2 rounded-full"
            onPress={() => {
              navigation.goBack()
            }}>
            <ArrowLeft
              strokeWidth={3}
              stroke={themeColors.bgColor(1)}/>
          </TouchableOpacity>
        </View>
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
              className="bg-white -mt-12 pt-6">
          <View className="px-3">
            <Text className="text-3xl font-bold">{params.name}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
