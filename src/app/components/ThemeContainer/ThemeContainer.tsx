'use client'

import { useState } from 'react'
import styles from './ThemeContainer.module.css'

export const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light')
  //   add after implementing themes design
  // const userPreferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // return <div className={` ${theme}-theme ${styles.normal}`}>{children}</div>
  return <div className={` ${styles.normal}`}>{children}</div>
}
