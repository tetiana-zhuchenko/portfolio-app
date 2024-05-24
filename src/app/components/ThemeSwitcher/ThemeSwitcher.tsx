'use client'

import { initialThemes } from 'src/app/data/initialThemes'
import styles from './ThemeSwitcher.module.css'
import Button from '../Button/Button'

export const ThemeSwitcher = () => {
  const handleBtnClick = () => {}
  return (
    <ul>
      {initialThemes.map((theme) => (
        <li key={theme.title}>
          <Button
            handleClick={handleBtnClick}
            title={theme.title}
            type="button"
            disabled={false}
          />
        </li>
      ))}
    </ul>
  )
}
