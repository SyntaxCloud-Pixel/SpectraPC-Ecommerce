import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div style={{ padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
      <style>{`
        .cart-summary { max-width: 400px; margin-left: auto; }
        @media (max-width: 768px) {
          .cart-item { flex-direction: column; align-items: flex-start !important; }
          .cart-item-img { width: 100% !important; height: 200px !important; }
          .cart-summary { max-width: 100%; margin-left: 0; }
          .cart-item-actions { width: 100%; justify-content: space-between; }
        }
      `}</style>

      <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>My Cart</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>
        {cartItems.length === 0 ? 'Your cart is empty' : `${cartItems.length} laptop${cartItems.length > 1 ? 's' : ''}`}
      </p>

      {cartItems.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '80px 20px',
          border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#fafafa'
        }}>
          <p style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</p>
          <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Nothing here yet</p>
          <p style={{ color: '#999', marginBottom: '24px' }}>Go add some laptops from the home page!</p>
          <Link to="/home" style={{
            backgroundColor: '#000', color: '#fff', padding: '12px 28px',
            borderRadius: '6px', textDecoration: 'none', fontSize: '15px', fontWeight: '500'
          }}>Browse Laptops</Link>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item" style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '20px', border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#fff'
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>{item.category}</p>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{item.name}</h3>
                  <p style={{ fontSize: '16px', fontWeight: '700' }}>${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => updateQuantity(item.id, -1)} style={qtyBtnStyle}>−</button>
                  <span style={{ fontSize: '16px', fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={qtyBtnStyle}>+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #eee',
                    borderRadius: '6px', cursor: 'pointer', fontSize: '14px',
                    fontWeight: '500', color: '#cc0000'
                  }}
                  onMouseEnter={e => e.target.style.backgroundColor = '#fff0f0'}
                  onMouseLeave={e => e.target.style.backgroundColor = '#fff'}
                >Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary" style={{
            padding: '24px', border: '1px solid #eee',
            borderRadius: '10px', backgroundColor: '#f9f9f9',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#666' }}>
                Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)
              </span>
              <span style={{ fontWeight: '500' }}>${total.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#666' }}>Shipping</span>
              <span style={{ fontWeight: '500', color: '#16a34a' }}>Free</span>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #eee'
            }}>
              <span style={{ fontSize: '18px', fontWeight: '700' }}>Total</span>
              <span style={{ fontSize: '18px', fontWeight: '700' }}>${total.toFixed(2)}</span>
            </div>
            <Link to="/address">
              <button style={{
                width: '100%', padding: '12px', backgroundColor: '#000', color: '#fff',
                border: 'none', borderRadius: '6px', fontSize: '16px',
                fontWeight: '500', cursor: 'pointer', marginTop: '20px'
              }}>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}

      <div style={{ marginTop: '24px' }}>
        <Link to="/home" style={{ color: '#000', fontWeight: '500', textDecoration: 'none', borderBottom: '1px solid #000' }}>
          Back to Shop
        </Link>
      </div>
    </div>
  )
}

const qtyBtnStyle = {
  width: '32px', height: '32px', backgroundColor: '#fff',
  border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer',
  fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1
}

export default Cart
