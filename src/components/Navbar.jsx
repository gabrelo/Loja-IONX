import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>IONX</span>
      <ul className={styles.links}>
        <li><a href="#promo">Promos</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#products" className={styles.cta}>Shop Now</a>
    </nav>
  )
}
