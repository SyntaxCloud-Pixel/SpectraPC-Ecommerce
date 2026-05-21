import { Link } from 'react-router-dom'

const cartItems = [
  { id: 1, name: 'MacBook Air M3', price: 1099.99, category: 'Apple', quantity: 1, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500' },
  { id: 2, name: 'Dell XPS 15', price: 1299.99, category: 'Dell', quantity: 1, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500' },
  { id: 3, name: 'ASUS ROG Zephyrus G14', price: 1499.99, category: 'ASUS', quantity: 1, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500' },
]

function Cart() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div style={{ padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
      <style>{`
        .cart-summary { max-width: 400px; margin-left: auto; }
        @media (max-width: 768px) {
          .cart-item { flex-direction: column; align-items: flex-start !important; }
          .cart-item-img { width: 100% !important; height: 200px !important; }
          .cart-summary { max-width: 100%; margin-left: 0; }
        }
      `}</style>

      <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>My Cart</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>{cartItems.length} laptops</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px',
            border: '1px solid #eee',
            borderRadius: '10px',
            backgroundColor: '#fff'
          }}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-img"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '8px',
                flexShrink: 0
              }}
            />

            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>{item.category}</p>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{item.name}</h3>
              <p style={{ fontSize: '16px', fontWeight: '700' }}>${item.price}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button style={qtyBtnStyle}>-</button>
              <span style={{ fontSize: '16px', fontWeight: '500' }}>{item.quantity}</span>
              <button style={qtyBtnStyle}>+</button>
            </div>

            <button style={{
              padding: '8px 16px',
              backgroundColor: '#fff',
              border: '1px solid #eee',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-summary" style={{
        padding: '24px',
        border: '1px solid #eee',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Order Summary</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#666' }}>Subtotal</span>
          <span style={{ fontWeight: '500' }}>${total.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#666' }}>Shipping</span>
          <span style={{ fontWeight: '500' }}>Free</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '1px solid #eee'
        }}>
          <span style={{ fontSize: '18px', fontWeight: '700' }}>Total</span>
          <span style={{ fontSize: '18px', fontWeight: '700' }}>${total.toFixed(2)}</span>
        </div>

        <Link to="/address">
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
            marginTop: '20px'
          }}>Proceed to Checkout</button>
        </Link>
      </div>

      <div style={{ marginTop: '24px' }}>
        <Link to="/home" style={{
          color: '#000',
          fontWeight: '500',
          textDecoration: 'none',
          borderBottom: '1px solid #000'
        }}>Back to Shop</Link>
      </div>
    </div>
  )
}

const qtyBtnStyle = {
  width: '32px',
  height: '32px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Cart