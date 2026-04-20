import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.left}>
        <p className={styles.tag}>Our Story</p>
        <h2 className={styles.title}>Built for the streets.<br />Designed for the bold.</h2>
        <p className={styles.text}>
          IONX was born in 2020 from a single idea: streetwear should feel as powerful
          as it looks. We obsess over every stitch, every cut, every fabric choice.
        </p>
        <p className={styles.text}>
          No mass production. No fast fashion. Just pieces built to last — and to be noticed.
        </p>
      </div>
      <div className={styles.right}>
        {[['500+', 'Products Sold'], ['12', 'Countries'], ['100%', 'Independent'], ['4.9★', 'Avg Rating']].map(([num, label]) => (
          <div key={label} className={styles.stat}>
            <p className={styles.num}>{num}</p>
            <p className={styles.label}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
