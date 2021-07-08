/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { IProduct } from './productsSlice'
import Product from './Product'

const dataTest: IProduct = {
	id: 1,
	price: 99,
	productName: 'tets',
	description: 'test cart',
	icon: 'dsada',
}

test('renders cart', () => {
	render(<Product {...dataTest} />)
	const description = screen.getByText(dataTest.description as string)
	const price = screen.getByText(`${dataTest.price}$`)
	const addCartBtnTitle = screen.getByText('Add to cart')
	expect(description).toBeInTheDocument()
	expect(price).toBeInTheDocument()
	expect(addCartBtnTitle).toBeInTheDocument()
})

test('Product image', () => {
	render(<Product {...dataTest} />)
	const productImg = screen.getByRole('img')
	expect(productImg).toHaveAttribute('src', dataTest.icon)
	expect(productImg).toHaveAttribute('alt', 'product avatar')
})
