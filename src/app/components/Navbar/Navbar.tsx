import { initialNavLinks } from 'src/app/data/initialNavLinks'

import styles from './Navbar.module.css'

import Link from 'next/link'

export const Navbar = () => {
  const isActiveLink = true
  return (
    <nav>
      <ul className={styles.linksWrapper}>
        {initialNavLinks.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className={item.url === './' ? styles.activeLink : styles.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
