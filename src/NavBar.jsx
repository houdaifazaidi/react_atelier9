import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from './Context.jsx'

export default function NavBar() {
  const { theme, setTheme, lang, setLang } = useContext(Context)

  // flip the boolean theme (true = dark, false = light)
  const toggleTheme = () => setTheme(prev => !prev)

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="brand">🌍 Tangier</h2>
        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/tangier" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Tangier</NavLink>
        </div>
      </div>

      <div className="nav-controls">
        <label className="select-wrap">
          <select value={lang} onChange={(e) => setLang(e.target.value)} aria-label="language">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
            <option value="ar">AR</option>
          </select>
        </label>

        <button 
          onClick={toggleTheme} 
          className="theme-toggle" 
          aria-pressed={theme}
          aria-label={theme ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme ? 'Light mode' : 'Dark mode'}
        >
          {theme ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
