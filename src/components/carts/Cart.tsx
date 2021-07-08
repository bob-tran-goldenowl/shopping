import React from 'react'
import { ICart } from './cartsSlice'

export interface CartProps extends ICart {
	onRemoveCart?: (id: Number) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Cart: React.FC<CartProps> = ({
	id,
	icon,
	price,
	description,
	productName,
	quantity,
	onRemoveCart,
}: CartProps) => (
	<div>
		<div className='container-card float' id={`cart_${id}`}>
			<div className='item wrapper-img float-item'>
				<img className='img' src={`${icon}`} alt='' />
			</div>
			<div className='item float-item product-b grid-container'>
				<div className='grid-item'>Cart Name</div>
				<div className='grid-item'>{productName}</div>
			</div>
			<div className='item float-item short grid-container'>
				<div className='grid-item'>Short Description</div>
				<div className='grid-item'>{description}</div>
			</div>
			<div className='item float-item qty grid-container'>
				<div className='grid-item'>Qty</div>
				<div className='grid-item'>{quantity}</div>
			</div>
			<div className='item float-item price grid-container'>
				<div className='grid-item'>Price per 1pc</div>
				<div className='grid-item'> {price}$</div>
			</div>
			<div className='item float-item total grid-container'>
				<div className='grid-item'> Line total</div>
				<div className='grid-item'>{price * quantity}$</div>
			</div>
			<div className='item float-item action grid-container'>
				<div className='grid-item'>
					<button
						className='remove-cart'
						type='button'
						onClick={() => onRemoveCart && onRemoveCart(id)}
					>
						Remove item
					</button>
				</div>
			</div>
		</div>
	</div>
)

export default Cart
