import React from 'react'
import { UI } from './ui'

const ContextWrapper = ({ children }) => {
  return (
    <UI>
      { children }
    </UI>
  )
}
export default ContextWrapper
