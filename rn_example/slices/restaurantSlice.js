/**
 * Created by zuoxiansheng on 4/12/23
 */
import { createSlice } from '@reduxjs/toolkit'
import { stat } from '@babel/core/lib/gensync-utils/fs'

const initialState = {
  restaurant: null,
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    },
  },
})

export const {setRestaurant} = restaurantSlice.actions

export const selectRestaurant = state => state.restaurant.restaurant

export default restaurantSlice.reducer
