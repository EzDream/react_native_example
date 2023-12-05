/**
 * Created by zuoxiansheng on 4/12/23
 */
import { createSlice } from '@reduxjs/toolkit'

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

export const selectRestaurant = state => state.restaurantReducer.restaurant

export default restaurantSlice.reducer
