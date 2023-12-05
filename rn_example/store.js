/**
 * Created by zuoxiansheng on 4/12/23
 */

import { configureStore } from '@reduxjs/toolkit'
import { restaurantSlice } from './slices/restaurantSlice'
import { cartSlice } from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    restaurantReducer: restaurantSlice.reducer,
    cart: cartSlice.reducer,
  },
})
