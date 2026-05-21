import { Link } from 'react-router-dom'

function ForgotPassword() {
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
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Forgot password?</h2>
        <p style={{ color: '#666', marginBottom: '32px' }}>
          Enter your email and we'll send you a reset link.
        </p>

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="you@example.com" style={inputStyle} />
        </div>

        <button style={btnStyle}>Send Reset Link</button>

        <p style={{ textAlign: 'center', marginTop: '16px', color: '#666' }}>
          Remember your password?{' '}
          <Link to="/login" style={{ color: '#000', fontWeight: '500' }}>Login</Link>
        </p>
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

export default ForgotPassword