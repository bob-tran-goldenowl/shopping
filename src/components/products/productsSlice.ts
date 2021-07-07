import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store'

export interface IProduct {
	id: Number
	icon?: String
	price: Number
	content?: String
}

export interface ProductsState {
	readonly products: IProduct[]
	readonly loading: boolean
}

export const ProductsInitialState: ProductsState = {
	products: [],
	loading: false,
}

const productsSlice = createSlice({
	name: 'products',
	initialState: ProductsInitialState,
	reducers: {
		startLoading: state => {
			state.loading = true
		},
		finishLoading: state => {
			state.loading = false
		},
		add: (state, action: PayloadAction<IProduct>) => {
			state.products.push(action.payload)
		},
		modify: (state, action: PayloadAction<IProduct[]>) => {
			const products = [...state.products]
			action.payload.forEach(product => {
				let index = products.findIndex(item => item.id === product.id)
				index = index !== -1 ? index : products.length
				products[index] = product
			})
			state.products = products
		},
		remove: (state, action: PayloadAction<IProduct[]>) => {
			const products = [...state.products]
			action.payload.forEach(product => {
				const index = products.findIndex(item => item.id === product.id)
				if (index > -1) {
					products.splice(index, 1)
				}
			})
			state.products = products
		},
	},
})

export const { startLoading, finishLoading, add, modify, remove } =
	productsSlice.actions

export const productsReducer = productsSlice.reducer

export const selectProducts = (state: RootState) =>
	state.productsReducer.products
