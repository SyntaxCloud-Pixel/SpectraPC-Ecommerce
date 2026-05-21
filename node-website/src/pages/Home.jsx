import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'MacBook Air M3', price: 1099.99, category: 'Apple', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500' },
  { id: 2, name: 'Dell XPS 15', price: 1299.99, category: 'Dell', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500' },
  { id: 3, name: 'HP Spectre x360', price: 1199.99, category: 'HP', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500' },
  { id: 4, name: 'Lenovo ThinkPad X1 Carbon', price: 1399.99, category: 'Lenovo', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500' },
  { id: 5, name: 'ASUS ROG Zephyrus G14', price: 1499.99, category: 'ASUS', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500' },
  { id: 6, name: 'Microsoft Surface Laptop 5', price: 999.99, category: 'Microsoft', image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500' },
]

function Home() {
  return (
    <div>
      <style>{`
        .hero { padding: 80px 40px; }
        .hero h1 { font-size: 48px; }
        .products-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hero { padding: 48px 20px; }
          .hero h1 { font-size: 32px; }
          .hero p { font-size: 15px; }
          .products-section { padding: 40px 20px !important; }
          .products-grid { grid-template-columns: repeat(1, 1fr); }
        }
      `}</style>
      <div className="hero" style={{
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}>
        <h1 className="hero h1" style={{ fontWeight: '700', color: '#000', marginBottom: '16px' }}>
          Find Your Perfect Laptop
        </h1>
        <p className="hero p" style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>
          Browse our collection of premium laptops from top brands.
        </p>
        <Link to="/cart" style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: '500'
        }}>Shop Now</Link>
      </div>
      <div className="products-section" style={{ padding: '60px 40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '32px' }}>Featured Laptops</h2>
        <div className="products-grid" style={{ display: 'grid', gap: '24px' }}>
          {products.map(product => (
            <div key={product.id} style={{
              border: '1px solid #eee',
              borderRadius: '10px',
              padding: '20px',
              backgroundColor: '#fff',
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              />
              <p style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>{product.category}</p>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{product.name}</h3>
              <p style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>${product.price}</p>

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
                }}>Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home