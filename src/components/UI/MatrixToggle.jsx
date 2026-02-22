import React from 'react'
import { FiTerminal } from 'react-icons/fi'
import { useMatrix } from '../../context/MatrixContext'
import { useTheme } from '../../context/ThemeContext'

const MatrixToggle = () => {
  const { isMatrixEnabled, toggleMatrix } = useMatrix()
  const { isDarkMode } = useTheme()

  return (
    <button
      onClick={toggleMatrix}
      className={`p-2 rounded-full transition-all duration-300 border-0 cursor-pointer flex items-center justify-center ${
        isMatrixEnabled
          ? isDarkMode
            ? 'bg-red-900/30 text-red-400 border border-red-700/50 shadow-lg shadow-red-900/20'
            : 'bg-red-100 text-red-600 border border-red-300 shadow-lg shadow-red-200/50'
          : isDarkMode
          ? 'bg-secondary hover:bg-accent-hover/20 text-text-secondary hover:text-white'
          : 'bg-secondary hover:bg-accent-hover/10 text-text-secondary hover:text-accent-hover'
      }`}
      aria-label={isMatrixEnabled ? 'Disable matrix background' : 'Enable matrix background'}
      title={isMatrixEnabled ? 'Turn off falling code effect' : 'Turn on falling code effect'}
    >
      <FiTerminal
        size={20} 
        className={`transition-transform duration-300 ${isMatrixEnabled ? 'animate-pulse' : ''}`}
      />
      {isMatrixEnabled && (
        <span className="ml-2 text-xs font-mono hidden sm:inline">
          Dev Mode
        </span>
      )}
    </button>
  )
}

export default MatrixToggle