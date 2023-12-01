import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import MyFunctionComponent from './components/MyFunctionComponent'
import { MyClassComponent } from './components/MyClassComponents'
import { useState } from 'react'

export default function App() {
  const [showClassComponent, setShowClassComponent] = useState(true)
  return (
    <View style={styles.container}>
      <Button title="Button"
              onPress={() => setShowClassComponent(prevState => !prevState)

              }/>
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
