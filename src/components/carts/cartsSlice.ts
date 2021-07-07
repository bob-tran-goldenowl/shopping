import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface ICart {
	id: Number
	amount: Number
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
		add: (state, action: PayloadAction<ICart>) => {
			state.carts.push(action.payload)
		},
		modify: (state, action: PayloadAction<ICart[]>) => {
			const carts = [...state.carts]
			action.payload.forEach(cart => {
				let index = carts.findIndex(item => item.id === cart.id)
				index = index !== -1 ? index : carts.length
				carts[index] = cart
			})
			state.carts = carts
		},
		remove: (state, action: PayloadAction<ICart[]>) => {
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

export const { startLoading, finishLoading, add, modify, remove } =
	cartsSlice.actions

export const cartsReducer = cartsSlice.reducer

export const selectCarts = (state: RootState) => state.cartsReducer.carts
