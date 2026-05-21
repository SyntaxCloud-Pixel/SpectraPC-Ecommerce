import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ setIsLoggedIn, emails, passwords }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const emailIndex = emails.indexOf(email)
    if (emailIndex !== -1 && passwords[emailIndex] === password) {
      setIsLoggedIn(true)
      navigate('/home')
    } else {
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        border: '1px solid #eee',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Welcome back</h2>
        <p style={{ color: '#666', marginBottom: '32px' }}>Login to your account</p>

        {error && (
          <div style={{
            backgroundColor: '#fff0f0',
            border: '1px solid #ffcccc',
            color: '#cc0000',
            padding: '10px 14px',
            borderRadius: '6px',
            marginBottom: '16px',
            fontSize: '14px'
          }}>{error}</div>
        )}

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="test@gmail.com"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin} style={btnStyle}>Login</button>

        <p style={{ textAlign: 'center', marginTop: '16px', color: '#666' }}>
          <Link to="/forgot-password" style={{ color: '#000', fontWeight: '500' }}>Forgot password?</Link>
        </p>

        <p style={{ textAlign: 'center', marginTop: '12px', color: '#666' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#000', fontWeight: '500' }}>Sign up</Link>
        </p>
        <div style={{
          marginTop: '24px',
          padding: '12px',
          backgroundColor: '#f9f9f9',
          borderRadius: '6px',
          fontSize: '13px',
          color: '#888'
        }}>
          Demo: test@gmail.com / 123456
        </div>
      </div>
    </div>
  )
}

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  marginBottom: '6px',
  color: '#333'
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box'
}

const btnStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer'
}

export default Login