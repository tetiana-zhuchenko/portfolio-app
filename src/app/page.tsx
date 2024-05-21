'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [theme, setTheme] = useState('light')
  return (
    <div className={`${theme}-theme`}>
      <main className={styles.main}>
        <h1>Home page</h1>
      </main>
    </div>
  )
}
