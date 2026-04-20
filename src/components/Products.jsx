import styles from './Products.module.css'

const products = [
  { id: 1, name: 'Shadow Hoodie',   price: 189, tag: 'Bestseller', color: '#1a1a1a' },
  { id: 2, name: 'Void Cargo',      price: 229, tag: 'New',        color: '#0d0d0d' },
  { id: 3, name: 'Recon Jacket',    price: 349, tag: 'Sale',       color: '#111' },
  { id: 4, name: 'Stealth Tee',     price: 89,  tag: null,         color: '#0a0a0a' },
  { id: 5, name: 'Drift Jogger',    price: 159, tag: 'New',        color: '#0e0e0e' },
  { id: 6, name: 'Cipher Cap',      price: 69,  tag: 'Sale',       color: '#121212' },
]

export default function Products() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>Our Products</p>
        <h2 className={styles.title}>The Collection</h2>
      </div>

      <div className={styles.grid}>
        {products.map(p => (
          <div key={p.id} className={styles.card}>
            <div className={styles.img} style={{ background: p.color }}>
              {p.tag && <span className={styles.badge}>{p.tag}</span>}
              <p className={styles.placeholder}>IONX</p>
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{p.name}</p>
              <p className={styles.price}>${p.price}</p>
            </div>
            <button className={styles.btn}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}
