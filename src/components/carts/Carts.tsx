import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { add, selectCarts } from './cartsSlice'

export interface CartProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Carts: React.FC<CartProps> = (props: CartProps) => {
	const products = useAppSelector(selectCarts)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(add({ id: 1, amount: 0 }))
	}, [])
	return <div>{JSON.stringify(products)}</div>
}

export default Carts
