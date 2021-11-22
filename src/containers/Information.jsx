import React, { useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AppContext } from '@context/AppContext'

import '@styles/components/Information.css'

const Information = () => {
  const {
    state: { cart },
    addToBuyer
  } = useContext(AppContext)
  const form = useRef(null)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new window.FormData(form.current)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone')
    }
    addToBuyer(buyer)
    navigate('/checkout/payment', { replace: true })
  }
  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Información de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              required
              type='text'
              placeholder='Nombre completo'
              name='name'
            />
            <input
              required
              type='email'
              placeholder='Correo Electronico'
              name='email'
            />
            <input
              required
              type='text'
              placeholder='Direccion'
              name='address'
            />
            <input required type='text' placeholder='apto' name='apto' />
            <input required type='text' placeholder='Ciudad' name='city' />
            <input required type='text' placeholder='Pais' name='country' />
            <input required type='text' placeholder='Estado' name='state' />
            <input
              required
              type='number'
              placeholder='Codigo postal'
              name='cp'
            />
            <input required type='number' placeholder='Telefono' name='phone' />
            <div className='Information-buttons'>
              <div className='Information-back'>
                <Link to='/checkout/'>Regresar</Link>
              </div>
              <div className='Information-next'>
                <button type='submit'>Pagar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Pedido:</h3>
        {cart.map(({ uuid, title, price }) => (
          <div className='Information-item' key={uuid}>
            <div className='Information-element'>
              <h4>{title}</h4>
              <span>${price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export { Information }
