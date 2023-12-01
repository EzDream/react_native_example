/**
 * Created by zuoxiansheng on 1/12/23
 */
import { React, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../GlobalStyles'

export default function(pros) {
  const [counter, setCounter] = useState(0)
  return (
    <View style={globalStyles.container}>
      <Text>{pros.text}: {counter}</Text>
      <Button title="Counter" onPress={() => {
        setCounter(prevState => prevState + 1)
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({})
