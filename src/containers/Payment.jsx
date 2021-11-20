import React from 'react'
import '@styles/components/Payment.css'

const Payment = () => {
  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        <div className='Payment-button'>Boton de pago con Paypal</div>
      </div>
      <div>
        <h1>A</h1>
      </div>
    </div>
  )
}

export { Payment }
