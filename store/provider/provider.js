'use client'
import React from 'react'
import Store from '../store/store'
import { Provider } from 'react-redux'
const StoreProvider = ({children}) => {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  )
}

export default StoreProvider
