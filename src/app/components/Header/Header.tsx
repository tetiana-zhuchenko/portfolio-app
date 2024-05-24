import { Navbar } from '../Navbar/Navbar'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <Navbar />
      <ThemeSwitcher />
    </header>
  )
}
