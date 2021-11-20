import { useState } from 'react'
import initialState from '../initialState'
const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = product => {
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }
  const removeToCart = product => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== product.id)
    })
  }
  return {
    addToCart,
    removeToCart,
    state
  }
}

export { useInitialState }
