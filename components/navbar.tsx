import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}> 
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/resume">Resume</Link>
      </li>
    </ul>
  )
}
