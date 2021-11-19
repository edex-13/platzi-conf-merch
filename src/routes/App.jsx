import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@containers/Home.jsx'
import { Checkout } from '@containers/Checkout'
import { Information } from '@containers/Information'
import { Success } from '@containers/Success'
import { NotFound } from '@containers/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/information' element={<Information />} />
        <Route path='/checkout/success' element={<Success />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
