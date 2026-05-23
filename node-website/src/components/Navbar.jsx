import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  const CartLink = ({ onClick }) => (
    <Link to="/cart" onClick={onClick} style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      Cart
      {cartCount > 0 && (
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '11px',
          fontWeight: '700',
          borderRadius: '999px',
          padding: '1px 6px',
          lineHeight: '16px',
        }}>{cartCount}</span>
      )}
    </Link>
  )

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      borderBottom: '1px solid #eee',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#000', margin: 0 }}>SpectraPC</h1>
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
        style={{ display: 'none', fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className="nav-links" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/wishlist" style={linkStyle}>Wishlist</Link>
        <CartLink />
        <Link to="/orders" style={linkStyle}>Orders</Link>
        <button onClick={handleLogout} style={{
          ...linkStyle,
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 20px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}>Logout</button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 99
        }}>
          <Link to="/home" style={linkStyle} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/wishlist" style={linkStyle} onClick={() => setMenuOpen(false)}>Wishlist</Link>
          <CartLink onClick={() => setMenuOpen(false)} />
          <Link to="/orders" style={linkStyle} onClick={() => setMenuOpen(false)}>Orders</Link>
          <button onClick={handleLogout} style={{
            ...linkStyle,
            backgroundColor: '#000',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'center'
          }}>Logout</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: block !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '15px',
  fontWeight: '500'
}

export default Navbar
