import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function about() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <h3 className={styles.title}>About Us</h3>
      <p className={styles.about}>Mangadana is a website where you can buy clothes on the theme of mangas. </p>
      </div>
  )
}

