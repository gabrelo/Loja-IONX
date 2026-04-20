import styles from './Promo.module.css'

export default function Promo() {
  return (
    <section id="promo" className={styles.promo}>
      <div className={styles.banner}>
        <div className={styles.left}>
          <p className={styles.tag}>Limited Time</p>
          <h2 className={styles.title}>Season Drop Sale</h2>
          <p className={styles.desc}>Up to 40% off on selected items. Don't sleep on this.</p>
          <a href="#products" className={styles.btn}>Grab the Deal</a>
        </div>
        <div className={styles.right}>
          <p className={styles.pct}>40<span>%</span></p>
          <p className={styles.off}>OFF</p>
        </div>
      </div>
    </section>
  )
}
