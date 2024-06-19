'use client'

import styles from './ThemeSwitcher.module.css'

import { ThemeIcon } from '../ThemeIcon/ThemeIcon'
import { useState } from 'react'

export const ThemeSwitcher = () => {
  const [isActiveDark, setIsActiveDark] = useState(true)
  const handleThemeBtnClick = () => {
    setIsActiveDark(!isActiveDark)
    document.body.className = `${!isActiveDark ? 'dark' : 'light'}-theme`
  }
  return (
    <>
      <ul className={styles.container}>
        <li key="light" className={styles.icon}>
          <ThemeIcon
            isLight={true}
            isActiveDark={isActiveDark}
            handleThemeBtnClick={handleThemeBtnClick}
          />
        </li>
        <li className={styles.divider}></li>
        <li key="dark">
          <ThemeIcon
            isLight={false}
            isActiveDark={isActiveDark}
            handleThemeBtnClick={handleThemeBtnClick}
          />
        </li>
      </ul>
    </>
  )
}
