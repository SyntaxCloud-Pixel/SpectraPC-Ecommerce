import { Link } from 'react-router-dom'

const orders = [
  {
    id: '#ORD-001',
    date: 'May 18, 2026',
    status: 'delivered',
    total: 1099.99,
    items: [
      { name: 'MacBook Air M3', quantity: 1, price: 1099.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500' },
    ]
  },
  {
    id: '#ORD-002',
    date: 'May 21, 2026',
    status: 'pending',
    total: 2799.98,
    items: [
      { name: 'Dell XPS 15', quantity: 1, price: 1299.99, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500' },
      { name: 'ASUS ROG Zephyrus G14', quantity: 1, price: 1499.99, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500' },
    ]
  },
]

function Orders() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>My Orders</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>{orders.length} orders placed</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {orders.map(order => (
          <div key={order.id} style={{
            border: '1px solid #eee',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#fff'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              backgroundColor: '#f9f9f9',
              borderBottom: '1px solid #eee'
            }}>
              <div>
                <span style={{ fontWeight: '700', fontSize: '16px' }}>{order.id}</span>
                <span style={{ color: '#999', fontSize: '14px', marginLeft: '12px' }}>{order.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  backgroundColor: order.status === 'delivered' ? '#e6f4ea' : '#fff8e1',
                  color: order.status === 'delivered' ? '#2e7d32' : '#f57f17'
                }}>
                  {order.status === 'delivered' ? 'Delivered' : 'Pending'}
                </span>
                <span style={{ fontWeight: '700', fontSize: '16px' }}>${order.total}</span>
              </div>
            </div>

            <div style={{ padding: '16px 24px' }}>
              {order.items.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: index !== 0 ? '12px' : '0',
                  marginTop: index !== 0 ? '12px' : '0',
                  borderTop: index !== 0 ? '1px solid #f3f3f3' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'cover',
                        borderRadius: '6px'
                      }}
                    />
                    <div>
                      <p style={{ fontWeight: '500', fontSize: '15px' }}>{item.name}</p>
                      <p style={{ color: '#999', fontSize: '13px' }}>Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p style={{ fontWeight: '600' }}>${item.price}</p>
                </div>
              ))}
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

export default Orders