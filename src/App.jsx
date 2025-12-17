import './App.css'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Tangier from './Tangier.jsx'
import NavBar from './NavBar.jsx'
import { Context } from './Context.jsx'

function App() {
  const { theme } = useContext(Context)

  return (
    <div className={`app-root ${theme ? 'theme-dark' : 'theme-light'}`}>
      <NavBar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tangier" element={<Tangier />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
