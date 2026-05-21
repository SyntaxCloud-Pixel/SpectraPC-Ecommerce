import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Address from './pages/Address'
import Orders from './pages/Orders'

const emails = ['sytheee9@gmail.com', 'test@gmail.com']
const passwords = ['12345', '123456']

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} emails={emails} passwords={passwords} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} emails={emails} passwords={passwords} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/wishlist" element={isLoggedIn ? <Wishlist /> : <Login setIsLoggedIn={setIsLoggedIn} emails={emails} passwords={passwords} />} />
        <Route path="/cart" element={isLoggedIn ? <Cart /> : <Login setIsLoggedIn={setIsLoggedIn} emails={emails} passwords={passwords} />} />
        <Route path="/address" element={isLoggedIn ? <Address /> : <Login setIsLoggedIn={setIsLoggedIn} emails={emails} passwords={passwords} />} />
        <Route path="/orders" element={isLoggedIn ? <Orders /> : <Login setIsLoggedIn={setIsLoggedIn} emails={emails} passwords={passwords} />} />
      </Routes>
    </Router>
  )
}

export default App