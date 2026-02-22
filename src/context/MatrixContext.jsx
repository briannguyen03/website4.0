import React, { createContext, useState, useContext, useEffect } from 'react'

const MatrixContext = createContext()

export const useMatrix = () => useContext(MatrixContext)

export const MatrixProvider = ({ children }) => {
  const [isMatrixEnabled, setIsMatrixEnabled] = useState(() => {
    const saved = localStorage.getItem('matrixEnabled')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('matrixEnabled', JSON.stringify(isMatrixEnabled))
  }, [isMatrixEnabled])

  const toggleMatrix = () => {
    setIsMatrixEnabled(prev => !prev)
  }

  return (
    <MatrixContext.Provider value={{ isMatrixEnabled, toggleMatrix }}>
      {children}
    </MatrixContext.Provider>
  )
}