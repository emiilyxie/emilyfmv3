import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navContainer}> 
      <li className={styles.navItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/about">About</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/resume-f23.pdf" target='_blank'>Resume</Link>
      </li>
      {/* <li className={styles.navItem}>
        <Link href="/test">Test</Link>
      </li> */}
    </ul>
  )
}
