import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>IONX</p>
      <p className={styles.copy}>© 2025 IONX. All rights reserved.</p>
    </footer>
  )
}
