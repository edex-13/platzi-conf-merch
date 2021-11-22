import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '@context/AppContext'

import '@styles/components/Checkout.css'

const Checkout = () => {
  const { state: { cart }, removeToCart } = useContext(AppContext)

  const handleRemove = (id) => {
    console.log(id)
    removeToCart(id)
  }

  const handleSumTotal = () => {
    const reducer = (acc, item) => acc + item.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }
  const Title = cart.length > 0 ? 'Lista de pedidos' : 'Sin pedidos...'
  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>{Title} </h3>
        {cart.map(({ uuid, title, price }) =>
          (
            <div className='Checkout-item' key={uuid}>
              <div className='Checkout-element'>
                <h4>{title}</h4>
                <span>${price}</span>
              </div>
              <button type='button' onClick={() => handleRemove(uuid)}>
                <i className='fas fa-trash-alt' title='Eliminar' />
              </button>
            </div>
          ))}
      </div>
      {cart.length > 0 && (
        <div className='Checkout-sidebar'>
          <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
            <button type='button'>Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}
export { Checkout }
