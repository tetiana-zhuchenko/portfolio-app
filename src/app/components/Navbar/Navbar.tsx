'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { initialNavLinks } from 'src/app/data/initialNavLinks'

import styles from './Navbar.module.css'

export const Navbar = () => {
  const path = usePathname()

  return (
    <nav>
      <ul className={styles.linksWrapper}>
        {initialNavLinks.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className={
                item.url === `.${path}` ? styles.activeLink : styles.link
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
