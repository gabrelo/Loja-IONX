import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tag}>New Collection — 2025</p>
        <h1 className={styles.title}>
          Wear the <span>Dark.</span>
        </h1>
        <p className={styles.sub}>
          Premium streetwear crafted for those who move differently.
          Bold cuts. Raw materials. Zero compromise.
        </p>
        <div className={styles.actions}>
          <a href="#products" className={styles.btnPrimary}>Explore Collection</a>
          <a href="#about" className={styles.btnSecondary}>Our Story</a>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.blob} />
        <p className={styles.bigText}>IONX</p>
      </div>
    </section>
  )
}
