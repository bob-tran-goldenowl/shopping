import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAssets } from '../../assets'
import { RootState } from '../../store'

export interface IProduct {
	id: number
	icon?: keyof IAssets
	price: number
	productName: string
	description?: string
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
    addProduct: (state, action: PayloadAction<IProduct[]>) => {
      const products = [...state.products]
      action.payload.forEach(product => {
        const index = products.findIndex(item => item.id === product.id)
        if (index <= -1) {
          products.push(product)
        }
      })
      state.products = products
    },
    removeProduct: (state, action: PayloadAction<IProduct[]>) => {
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

export const { startLoading, finishLoading, addProduct, removeProduct } =
	productsSlice.actions

export const productsReducer = productsSlice.reducer

export const selectProducts = (state: RootState) =>
  state.productsReducer.products

export const selectProduct = (state: RootState, id: number) =>
  state.productsReducer.products.find(item => item.id === id)
