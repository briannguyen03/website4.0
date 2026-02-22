import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import * as FiIcons from 'react-icons/fi'

const Header = () => {
  const location = useLocation()
  const { isDarkMode, toggleTheme } = useTheme()

  const navItems = [
    { path: '/', label: 'Home', icon: <FiIcons.FiHome /> },
    { path: '/about', label: 'About', icon: <FiIcons.FiUser /> },
    { path: '/projects', label: 'Projects', icon: <FiIcons.FiBriefcase /> },
    { path: '/contact', label: 'Contact', icon: <FiIcons.FiMail /> },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link to="/" className="flex items-center space-x-2 no-underline">
            <span className="text-xl font-bold text-accent font-heading">Brian Nguyen</span>
            <span className="text-sm text-text-secondary hidden md:inline">@ UVic</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors no-underline ${
                    location.pathname === item.path
                      ? 'bg-accent text-white'
                      : 'hover:bg-secondary text-text-primary'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle - Window/Shades Analogy */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors border-0 cursor-pointer"
              aria-label={isDarkMode ? 'Switch to light mode (open shades)' : 'Switch to dark mode (close shades)'}
              title={isDarkMode ? 'Open shades for light mode' : 'Close shades for dark mode'}
            >
              {isDarkMode ? (
                // Shades closed for dark mode - eye closed (blocking the light)
                <FiIcons.FiEyeOff size={20} title="Shades closed (dark mode)" />
              ) : (
                // Shades open for light mode - eye open (seeing the light)
                <FiIcons.FiEye size={20} title="Shades open (light mode)" />
              )}
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md bg-secondary border-0 cursor-pointer">
              <span className="sr-only">Menu</span>
              <div className="w-6 h-0.5 bg-text-primary mb-1"></div>
              <div className="w-6 h-0.5 bg-text-primary mb-1"></div>
              <div className="w-6 h-0.5 bg-text-primary"></div>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-3">
          <div className="flex justify-around">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-2 rounded-lg no-underline ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-text-secondary'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
