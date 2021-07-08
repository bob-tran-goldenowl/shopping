import React, { useCallback, useState } from 'react'
import Assets from '../assets'
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
              <img src={Assets.square} alt='hamburger' className='hamburger-icon' />
            </button>
          </div>
          <div className='narrowLinks' style={{ display: open ? 'block' : 'none' }}>
            <div>
              <button type='button' onClick={() => redirect(Routes.products.path)}>
								Products
              </button>
            </div>
            <div>
              <button type='button' onClick={() => redirect(Routes.carts.path)}>
								Carts
              </button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}

export default BasicLayout
