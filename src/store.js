import {configureStore} from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import products from './slices/productsSlice'

export const store = configureStore({
	reducer: {
		cart: cart,
		products: products
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch