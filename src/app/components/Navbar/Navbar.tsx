import { initialNavLinks } from 'src/app/data/initialNavLinks'
import styles from './Navbar.module.css'

import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.linksWrapper}>
        {initialNavLinks.map((item) => (
          <li key={item.title}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
