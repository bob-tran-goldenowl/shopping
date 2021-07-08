import React from 'react'
import { IProduct } from './productsSlice'
import './Products.css'

export interface ProductProps extends IProduct {
	onAddCart?: (id: Number) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Product: React.FC<ProductProps> = ({
	id,
	icon,
	price,
	description,
	onAddCart,
}: ProductProps) => (
	<div className='container' id={`product_${id}`}>
		<div className='product'>
			<img className='img' src={`${icon}`} alt='' />
		</div>
		<span className='price'>{price}$</span>
		<div>
			<span>{description}</span>
		</div>
		<button
			type='button'
			className='add-to-cart'
			onClick={() => onAddCart && onAddCart(id)}
		>
			Add to cart
		</button>
	</div>
)

export default Product