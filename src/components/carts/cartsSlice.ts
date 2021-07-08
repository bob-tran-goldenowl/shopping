import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { IProduct } from '../products/productsSlice'

export interface ICart extends IProduct {
	quantity: number
}

export interface CartsState {
	readonly carts: ICart[]
	readonly loading: boolean
}

export const CartsInitialState: CartsState = {
	carts: [],
	loading: false,
}

const cartsSlice = createSlice({
	name: 'carts',
	initialState: CartsInitialState,
	reducers: {
		startLoading: state => {
			state.loading = true
		},
		finishLoading: state => {
			state.loading = false
		},
		addCarts: (state, action: PayloadAction<IProduct[]>) => {
			const carts = [...state.carts]
			action.payload.forEach(product => {
				const index = carts.findIndex(item => item.id === product.id)
				if (index > -1) {
					carts[index] = { ...carts[index], quantity: carts[index].quantity + 1 }
				} else {
					carts.push({ ...product, quantity: 1 })
				}
			})
			state.carts = carts
		},
		removeCarts: (state, action: PayloadAction<ICart[]>) => {
			const carts = [...state.carts]
			action.payload.forEach(cart => {
				const index = carts.findIndex(item => item.id === cart.id)
				if (index > -1) {
					carts.splice(index, 1)
				}
			})
			state.carts = carts
		},
	},
})

export const { startLoading, finishLoading, addCarts, removeCarts } =
	cartsSlice.actions

export const cartsReducer = cartsSlice.reducer

export const selectCarts = (state: RootState) => state.cartsReducer.carts

export const totalCart = (state: RootState) => {
	let total = 0
	state.cartsReducer.carts.forEach(cart => {
		total += cart.quantity
	})
	return total
}
