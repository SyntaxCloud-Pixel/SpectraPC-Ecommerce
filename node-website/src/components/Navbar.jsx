import { Link, useNavigate } from 'react-router-dom'

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      borderBottom: '1px solid #eee',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#000' }}>SpectraPC</h1>
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/wishlist" style={linkStyle}>Wishlist</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
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