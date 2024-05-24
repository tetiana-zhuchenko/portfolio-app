'use client'

import { useState } from 'react'
import styles from './ThemeContainer.module.css'

export const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('dark')
  return <div className={` ${theme}-theme ${styles.normal}`}>{children}</div>
}
