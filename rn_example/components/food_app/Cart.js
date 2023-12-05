/**
 * Created by zuoxiansheng on 3/12/23
 */
import { React } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity, Vibration,
  View,
} from 'react-native'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../navigation'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../slices/cartSlice'

export default function Cart() {
  let navigator = useNavigation()
  const cartItems = useSelector(selectCartItems)
  if (!cartItems || !cartItems.length) {
    return
  }
  return (
    <SafeAreaView className="absolute bottom-5 w-full z-50">
      <TouchableOpacity activeOpacity={0.6}
                        onPress={() => navigator.navigate(
                          Routes.CartScreen)}
                        className="flex-row items-center p-2 rounded-full flex-1 px-3 mx-3 py-3 shadow-2xl"
                        style={{backgroundColor: themeColors.bgColor(1)}}>
        <View className="rounded-full w-8 h-8 items-center justify-center"
              style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text className="text-white font-bold text-lg">3</Text>
        </View>
        <Text className="text-white flex-1 text-center font-extrabold text-lg">View
          Cart</Text>
        <TouchableNativeFeedback>
          <Text className="text-white text-lg font-bold">$23</Text>
        </TouchableNativeFeedback>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
