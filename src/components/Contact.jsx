import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.tag}>Get in Touch</p>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.sub}>Questions, collabs, wholesale — we're listening.</p>

        {sent ? (
          <div className={styles.success}>
            <p>Message sent! We'll get back to you soon.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input required type="text"  placeholder="Your Name"  className={styles.input} />
              <input required type="email" placeholder="Your Email" className={styles.input} />
            </div>
            <textarea required placeholder="Your Message" className={styles.textarea} rows={5} />
            <button type="submit" className={styles.btn}>Send Message</button>
          </form>
        )}
      </div>
    </section>
  )
}
