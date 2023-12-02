/**
 * Created by zuoxiansheng on 2/12/23
 */
import { React, useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { categories } from '../../constant'

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null)
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          categories.map((category, index) => {
            let isActive = category.id === activeCategory
            let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200'
            let textClass = isActive ? ' text-gray-800' : ' text-gray-500'
            return (
              <View key={index} className="mr-2 items-center">
                <TouchableOpacity
                  onPress={() => {
                    let id = category.id === activeCategory ? null : category.id
                    setActiveCategory(id)
                  }}
                  className={`items-center justify-center rounded-full shadowrounded p-1  bg-gray-100 ${btnClass}`}>
                  <Image style={{width: 40, height: 40}}
                         source={category.image}/>
                </TouchableOpacity>
                <Text
                  className={`text-sm font-bold ${textClass}`}>{category.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
