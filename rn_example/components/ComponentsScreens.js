/**
 * Created by zuoxiansheng on 2/12/23
 */
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import MyFunctionComponent from './MyFunctionComponent'
import { MyClassComponent } from './MyClassComponents'
import { StatusBar } from 'expo-status-bar'

export default function ComponentsScreens() {
  const [showClassComponent, setShowClassComponent] = useState(true)
  return (
    <View style={styles.container}>
      <Text className="end$">111</Text>
      <Button color="red" title="Button"
              onPress={() => {
                setShowClassComponent(prevState => !prevState)
              }}/>
      <MyFunctionComponent text={'MyFunctionComponent'}/>
      {showClassComponent && <MyClassComponent text={'MyClassComponent'}/>}

      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
