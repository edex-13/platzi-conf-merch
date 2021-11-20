import { useState } from 'react'
import initialState from '../initialState'

import { v4 as uuidv4 } from 'uuid'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = product => {
    const cart = [...state.cart, {
      uuid: uuidv4(),
      ...product
    }]
    setState({
      ...state,
      cart
    })
  }
  const removeToCart = productId => {
    const cart = state.cart.filter(items => items.uuid !== productId)
    setState({
      ...state,
      cart
    })
  }
  return {
    addToCart,
    removeToCart,
    state
  }
}

export { useInitialState }
