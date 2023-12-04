/**
 * Created by zuoxiansheng on 4/12/23
 */
import { React } from 'react'
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../../constant'
import MapView, { Marker } from 'react-native-maps'
import { globalStyles } from '../../GlobalStyles'
import { StatusBar } from 'expo-status-bar'
import { themeColors } from '../../theme'
import { Phone, X } from 'react-native-feather'

export default function DeliveryScreen() {
  let navigation = useNavigation()
  let restaurant = featured.restaurants[0]
  return (
    <View className="flex-1">
      <Text>DeliveryScreen</Text>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{latitude: restaurant.lat, longitude: restaurant.lng}}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View
        className="bg-white absolute bottom-0 left-0 right-0 rounded-t-3xl p-2 space-y-10 pt-4 pb-10"
        style={globalStyles.shadow}>

        <View className="flex-row items-center px-2">
          <View className="px-2 space-y-1 flex-1">
            <Text className="text-lg font-extrabold">Estimate Arrival</Text>
            <Text className="text-3xl font-extrabold text-gray-700">20-30
              Minutes</Text>
            <Text className="font-bold text-gray-600">Your order is own its
              way!</Text>
          </View>
          <Image
            source={require('../../assets/food_app/images/bikeGuy2.gif')}
            className="w-20 h-20"/>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}}
              className="flex-row p-2 rounded-full items-center space-x-2">
          <View className="p-1 rounded-full"
                style={{backgroundColor: 'rgba(255,255,255, 0.4)'}}>
            <Image
              source={require('../../assets/food_app/images/deliveryGuy.png')}
              className="w-14 h-14 rounded-full"/>
          </View>
          <View className="flex-1">
            <Text className="text-white font-bold">Syed Noman</Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>
          <View className="space-x-3 flex-row">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Phone width={20} height={20}
                     stroke={themeColors.bgColor(1)}
                     fill={themeColors.bgColor(1)}/>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <X width={20} height={20}
                 strokeWidth={5}
                 stroke={'red'}
                 fill={themeColors.bgColor(1)}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({})
