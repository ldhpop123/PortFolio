// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import List from './components/list'
import Item from './components/item'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <header>
        <h1 className='headerText'>PortFolio</h1>
      </header>
      <nav className='navContainer'>
        <Link className='navItem' to="/">HOME</Link>
        <Link className='navItem' to="/intro">INTRO</Link>
        <Link className='navItem' to="/list">LIST</Link>
        <Link className='navItem' to="/">HOME</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>홈 화면</h2>} />
        <Route path="/list" element={<List />} />
        <Route path="/intro" element={<h2>소개 페이지</h2>} />
        <Route path="/items/:id" element={<Item />} />
      </Routes>
    </Router>
  )
}
