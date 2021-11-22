import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PayPalButton } from 'react-paypal-button-v2'
import '@styles/components/Payment.css'

import { AppContext } from '@context/AppContext'

const Payment = () => {
  const navigate = useNavigate()
  const {
    state: { cart, buyer }, addNewOrder
  } = useContext(AppContext)

  const paypalOptions = {
    clientId: process.env.CLIENT_ID,
    intent: 'capture',
    currency: 'USD'
  }
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success', { replace: true })
    }
  }
  const handleSumTotal = () => {
    const reducer = (acc, item) => acc + item.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }
  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.uuid}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}

export { Payment }
