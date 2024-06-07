'use client'

import { StaticImageData } from 'next/image'
import styles from './Button.module.css'
import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  handleClick?: () => void
  title: string | ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
  disabled?: boolean
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  handleClick,
  title,
  type,
  disabled,
  href,
}) => {
  return href ? (
    <Link
      href={href}
      className={disabled ? styles.disabledButton : styles.button}
    >
      {title}
    </Link>
  ) : (
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
