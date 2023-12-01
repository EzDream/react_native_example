/**
 * Created by zuoxiansheng on 1/12/23
 */
import { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../GlobalStyles'

export class MyClassComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Text>{this.props.text} : {this.state.counter}</Text>
        <Button title="Counter in Class"
                onPress={() => {
                  this.setState(
                    {counter: this.state.counter + 1})
                }}></Button>
      </View>
    )
  }

  componentDidMount() {
//    alert('componentDidMount')
  }

  componentWillUnmount() {
//    alert('componentWillUnmount')
  }
}
