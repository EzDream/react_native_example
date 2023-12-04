/**
 * Created by zuoxiansheng on 3/12/23
 */
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Minus, Plus } from 'react-native-feather'
import { themeColors } from '../../theme'

export default function DishRow({item}) {
  return (
    <View
      className="bg-white px-3 mb-3 rounded-2xl flex-row p-3 shadow-2xl">
      <Image className="rounded-2xl" style={{width: 100, height: 100}}
             source={item.image}/>
      <View className="flex-col pl-3 flex-1">
        <View className="flex flex-1 space-y-1 ">
          <Text className="text-xl font-bold">{item.name}</Text>
          <Text className="text-gray-500">{item.description}</Text>
        </View>
        <View className="pb-2 flex-row items-center">
          <Text
            className="text-gray-700 font-bold text-lg flex-1">${item.price}</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="rounded-full p-0.5"
                              style={{backgroundColor: themeColors.bgColor(1)}}>
              <Minus width={20} height={20} stroke="white"
              />
            </TouchableOpacity>
            <Text>{2}</Text>
            <TouchableOpacity className="rounded-full p-0.5"
                              style={{backgroundColor: themeColors.bgColor(1)}}>
              <Plus width={20} height={20} stroke="white"
              />
            </TouchableOpacity>

          </View>
        </View>
      </View>

    </View>
  )
}
