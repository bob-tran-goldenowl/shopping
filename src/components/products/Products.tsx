import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { add, selectProducts } from './productsSlice'

export interface ProductProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Products: React.FC<ProductProps> = (props: ProductProps) => {
	const products = useAppSelector(selectProducts)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(add({ id: 1, content: 'pppp', icon: 'ppp', price: 333 }))
	}, [])
	return <div>{JSON.stringify(products)}</div>
}

export default Products
