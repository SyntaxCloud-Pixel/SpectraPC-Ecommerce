import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9f9f9',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        border: '1px solid #eee',
        width: '100%',
        maxWidth: '400px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Create account</h2>
        <p style={{ color: '#666', marginBottom: '32px' }}>Sign up to get started</p>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Full Name</label>
          <input type="text" placeholder="John Doe" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="you@example.com" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Password</label>
          <input type="password" placeholder="••••••••" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Confirm Password</label>
          <input type="password" placeholder="••••••••" style={inputStyle} />
        </div>

        <button style={btnStyle}>Create Account</button>

        <p style={{ textAlign: 'center', marginTop: '16px', color: '#666' }}>
          Already have an account?{' '}
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

export default Signup