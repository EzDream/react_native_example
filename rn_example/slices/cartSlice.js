/**
 * Created by zuoxiansheng on 4/12/23
 */
import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('addToCart')
      state.items = [...state.items, action.payload]
    },
    clearCart: (state, action) => {
      state.items = []
    },
    removeFromCartBy: (state, action) => {
      let newCart = [...state.items]
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

export const {
  clearCart,
  addToCart,
  removeFromCartBy,
} = cartSlice.actions

export const selectCartItems = state => state.cart.items

//export const selectCartItemsById = (state, id) => state.cart.items.filter(
//  item => item.id === id)

export const selectCartItemsById = createSelector(
  [(state, id) => state.cart.items, (state, id) => id],
  (items, id) => items.filter(item => item.id === id),
)

export const selectCartTotal = state => state.cart.items.reduce(
  (total, item) => total + item.price, 0)

export default cartSlice.reducer
