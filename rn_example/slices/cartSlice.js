/**
 * Created by zuoxiansheng on 4/12/23
 */
import { createSlice } from '@reduxjs/toolkit'
import { stat } from '@babel/core/lib/gensync-utils/fs'

const initialState = {
  items: null,
}

export const cartSlice = createSlice({
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
      state.items = newCart
    },
  },
})

export const {clearCart, addToCart, removeFromCart} = cartSlice.actions

export const selectCartItems = state => state.cart.items

export const selectCartItemsById = (state, id) => state.cart.items.filter(
  item => item.id === id)

export const selectCartTotal = state => state.cart.items.reduce(
  (total, item) => total + item.price, 0)

export default cartSlice.reducer
