import React, { useContext } from 'react'

import { AppContext } from '@context/AppContext'

import '@styles/components/Success.css'
const Success = () => {
  const { state: { buyer } } = useContext(AppContext)

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>{`Tu pedido llegara en 3 dias a tu direccion:${buyer[0].address}`}</span>
        <div className='Success-map'>Google Maps</div>
      </div>
    </div>
  )
}

export { Success }
