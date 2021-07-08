import React, { useCallback, useState } from 'react'
import { history, Routes } from '../Router'
import './BasicLayout.css'

const BasicLayout: React.FC = ({ children }) => {
	const [open, setOpen] = useState(false)
	const burgerToggle = useCallback(bool => {
		setOpen(bool)
	}, [])

	const redirect = useCallback(url => {
		setOpen(false)
		history.push(url)
	}, [])

	return (
		<>
			<nav>
				<div className='navWide'>
					<div className='wideDiv'>
						<button type='button' onClick={() => history.push(Routes.products.path)}>
							Products
						</button>
						<button type='button' onClick={() => history.push(Routes.carts.path)}>
							Carts
						</button>
					</div>
				</div>
				<div className='navNarrow'>
					<div className='hamburger'>
						<button type='button' onClick={() => burgerToggle(!open)}>
							Open
						</button>
					</div>
					<div className='narrowLinks' style={{ display: open ? 'block' : 'none' }}>
						<div>
							<button type='button' onClick={() => redirect(Routes.products.path)}>
								Products
							</button>
						</div>
						<button type='button' onClick={() => redirect(Routes.carts.path)}>
							Carts
						</button>
					</div>
				</div>
			</nav>
			{children}
		</>
	)
}

export default BasicLayout
