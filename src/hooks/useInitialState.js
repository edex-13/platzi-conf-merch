import { useState } from 'react'
import initialState from '../initialState'

import { v4 as uuidv4 } from 'uuid'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = product => {
    setState({
      ...state,
      cart: [...state.cart, {
        uuid: uuidv4(),
        ...product
      }]
    })
  }
  const removeToCart = productId => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.uuid !== productId)
    })
  }
  return {
    addToCart,
    removeToCart,
    state
  }
}

export { useInitialState }
