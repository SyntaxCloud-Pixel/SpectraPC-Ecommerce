import { Link } from 'react-router-dom'

function Address() {
  return (
    <div style={{ padding: '40px 24px', maxWidth: '600px', margin: '0 auto' }}>
      <style>{`
        .address-row { display: flex; gap: 16px; }
        @media (max-width: 768px) { .address-row { flex-direction: column; } }
      `}</style>

      <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Delivery Address</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>Enter your shipping details</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

        <div className="address-row">
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>First Name</label>
            <input type="text" placeholder="John" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Last Name</label>
            <input type="text" placeholder="Doe" style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="you@example.com" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Phone Number</label>
          <input type="tel" placeholder="+1 234 567 8900" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Address</label>
          <input type="text" placeholder="123 Main Street" style={inputStyle} />
        </div>

        <div className="address-row">
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>City</label>
            <input type="text" placeholder="New York" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>State</label>
            <input type="text" placeholder="NY" style={inputStyle} />
          </div>
        </div>

        <div className="address-row">
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Zip Code</label>
            <input type="text" placeholder="10001" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Country</label>
            <input type="text" placeholder="United States" style={inputStyle} />
          </div>
        </div>

        <Link to="/orders">
          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            marginTop: '8px'
          }}>Place Order</button>
        </Link>

        <Link to="/cart" style={{
          color: '#000',
          fontWeight: '500',
          textDecoration: 'none',
          borderBottom: '1px solid #000',
          alignSelf: 'flex-start'
        }}>Back to Cart</Link>

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

export default Address