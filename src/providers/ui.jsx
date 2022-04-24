import React, { createContext } from 'react'

export const UIContext = createContext()

export const UI = ({ children }) => {
  const isSmallView = (window.innerWidth < 900)

  return (
    <UIContext.Provider value={{ isSmallView }}>
      { children }
    </UIContext.Provider>
  )
}
