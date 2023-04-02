import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk("products/getProducts", 
	async (size) => {
		return fetch("http://localhost:3004/products")
			.then((res) => res.json())
			.then(data => data.filter(product => size ? product.size===size : true));
	}
);

const initialState = {
	products: []
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending]: state => {
			state.products = []
		},
		[fetchProducts.fulfilled]: (state, { payload }) => {
			state.products = payload
		},
		[fetchProducts.rejected]: (state, error) => {
			state.products = []
		}
	}
});
export default productsSlice.reducer;