'use client'

import { StaticImageData } from 'next/image'
import styles from './Button.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
  handleClick: () => void
  title: string | ReactNode
  type: 'submit' | 'reset' | 'button' | undefined
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({
  handleClick,
  title,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={disabled ? styles.disabledButton : styles.button}
    >
      {title}
    </button>
  )
}

export default Button
