import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { selectProducts, IProduct, addProduct } from './productsSlice'
import Product from './Product'
import './Products.css'
import { addCarts, totalCart } from '../carts/cartsSlice'
import Assets from '../../assets'

const productContanst: IProduct[] = [
	{
		id: 1,
		icon: Assets.Typescript,
		price: 99,
		description: 'Typescript',
		productName: 'Typescript',
	},
	{
		id: 2,
		icon: Assets.Go,
		price: 39,
		description: 'Go',
		productName: 'Go',
	},
	{
		id: 3,
		icon: Assets.Javascript,
		price: 79,
		description: 'Javascript',
		productName: 'Javascript',
	},
	{
		id: 4,
		icon: Assets.Java,
		price: 909,
		description: 'Java',
		productName: 'Java',
	},
	{
		id: 5,
		icon: Assets.C,
		price: 9,
		description: 'C',
		productName: 'C',
	},
	{
		id: 6,
		icon: Assets.Angular,
		price: 9999,
		description: 'Angular',
		productName: 'Angular',
	},
	{
		id: 7,
		icon: Assets.Github,
		price: 39,
		description: 'Github',
		productName: 'Github',
	},
	{
		id: 8,
		icon: Assets.Node,
		price: 79,
		description: 'Node',
		productName: 'Node',
	},
	{
		id: 9,
		icon: Assets.React,
		price: 909,
		description: 'React',
		productName: 'React',
	},
	{
		id: 10,
		icon: Assets.Slack,
		price: 9,
		description: 'Slack',
		productName: 'Slack',
	},
	{
		id: 11,
		icon: Assets.Vue,
		price: 99,
		description: 'Vue',
		productName: 'Vue',
	},
]

const Products: React.FC = () => {
	const products = useAppSelector(selectProducts)
	const total = useAppSelector(totalCart)
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (!products.length) {
			dispatch(addProduct(productContanst))
		}
	}, [])
	const handlerAddCart = useCallback(
		id => {
			const productInfo = products.find(product => product.id === id)
			if (productInfo) {
				dispatch(addCarts([productInfo]))
			}
		},
		[products]
	)
	return (
		<div>
			<div className='quantity-cart-wrapper'>
				<p>Cart</p>
				<p>{total}</p>
			</div>
			<div>
				{products.map(product => (
					<Product {...product} onAddCart={handlerAddCart} key={product.id} />
				))}
			</div>
		</div>
	)
}

export default Products
