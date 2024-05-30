'use client'

import styles from './ThemeSwitcher.module.css'

import { ThemeIcon } from '../ThemeIcon/ThemeIcon'

export const ThemeSwitcher = () => {
  const handleBtnClick = () => {}
  return (
    <>
      <ul className={styles.container}>
        <li key="light" className={styles.icon}>
          <ThemeIcon isLight={true} />
        </li>
        <li className={styles.divider}></li>
        <li key="dark">
          <ThemeIcon isLight={false} />
        </li>
      </ul>
    </>
  )
}
