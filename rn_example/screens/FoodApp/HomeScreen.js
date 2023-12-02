/**
 * Created by zuoxiansheng on 2/12/23
 */
import { React } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather'
import { themeColors } from '../../theme'
import Categories from '../../components/food_app/Categories'

export default function HomeScreen() {
  return (<SafeAreaView className="bg-white py-2 pb-5  px-2">
    <StatusBar style="style={}"></StatusBar>
    <View className="flex-row space-x-2 items-center py-2">
      <View
        className="flex-row flex-1 border border-gray-100 rounded-full pt-2 pb-2 pl-2 pr-2 items-center">
        <Icon.Search height="20" width="20" stroke="gray"/>
        <TextInput placeholder="Restaurant" className="flex-1 ml-2"/>
        <View
          className="flex-row items-center space-x-1 border-0 border-l-2 border-gray-200 pl-2">
          <Icon.MapPin height="20" width="20" stroke="gray"/>
          <Text className="text-gray-600">New York, NYC</Text>
        </View>
      </View>
      <View className="p-3 rounded-full"
            style={{backgroundColor: themeColors.bgColor(1)}}>
        <Icon.Sliders width={20} height={20} stroke="white"></Icon.Sliders>
      </View>
    </View>

    <ScrollView showsVerticalScrollIndicator={true}>
      <Categories/>
    </ScrollView>
  </SafeAreaView>)
}

const styles = StyleSheet.create({})
