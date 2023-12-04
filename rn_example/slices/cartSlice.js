/**
 * Created by zuoxiansheng on 4/12/23
 */
import { createSlice } from '@reduxjs/toolkit'
import { stat } from '@babel/core/lib/gensync-utils/fs'

const initialState = {
  items: null,
}

export const restaurantSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state, action.payload]
    },
    clearCart: (state, action) => {
      state.items = []
    },
    removeFromCart: (state, action) => {
      let newCart = [...state, action.payload]
      let index = newCart.findIndex(item => item.id === action.payload.id)
      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.log(`cannot find ${action.payload} when removing it`)
      }
    },
  },
})

export const {setRestaurant} = restaurantSlice.actions

export const selectRestaurant = state => state.restaurant.restaurant

export default restaurantSlice.reducer
