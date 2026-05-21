import { Link } from 'react-router-dom'

const wishlistItems = [
  { id: 1, name: 'MacBook Air M3', price: 1099.99, category: 'Apple', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500' },
  { id: 2, name: 'Dell XPS 15', price: 1299.99, category: 'Dell', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500' },
  { id: 3, name: 'ASUS ROG Zephyrus G14', price: 1499.99, category: 'ASUS', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500' },
]

function Wishlist() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>My Wishlist</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>{wishlistItems.length} laptops saved</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {wishlistItems.map(item => (
          <div key={item.id} style={{
            border: '1px solid #eee',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#fff',
          }}>
           <img
  src={item.image}
  alt={item.name}
  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '16px'
  }}
/>

            <p style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>{item.category}</p>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{item.name}</h3>
            <p style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>${item.price}</p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                flex: 1,
                padding: '10px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>Add to Cart</button>
              <button style={{
                padding: '10px 14px',
                backgroundColor: '#fff',
                border: '1px solid #eee',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <Link to="/" style={{
          color: '#000',
          fontWeight: '500',
          textDecoration: 'none',
          borderBottom: '1px solid #000'
        }}>Back to Shop</Link>
      </div>
    </div>
  )
}

export default Wishlist