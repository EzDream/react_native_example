/**
 * Created by zuoxiansheng on 1/12/23
 */
import { Platform, StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: 'rgba(179,167,167,0.15)',
    borderRadius: 10,
  },

  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
})
