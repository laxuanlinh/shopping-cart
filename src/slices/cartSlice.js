import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartProducts: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, product) => {
			const existingProducts = JSON.parse(JSON.stringify(state.cartProducts));
			const index = existingProducts.findIndex(p=>p.id == product.payload.id);
			if(index > -1){
				existingProducts[index] = {...existingProducts[index], count: existingProducts[index].count+1};
				state.cartProducts = [...existingProducts];
			} else {
				state.cartProducts = [...existingProducts, {...product.payload, count: 1}]
			}
		},
		removeProduct: (state, product) => {
			const existingProducts = JSON.parse(JSON.stringify(state.cartProducts));
			const index = existingProducts.findIndex(p=>p.id == product.payload.id);
			if(state.cartProducts[index].count==1){
				state.cartProducts.splice(index, 1);
			} else {
				state.cartProducts[index].count = state.cartProducts[index].count - 1;
			}
		}
	}
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer