import { GeneralContainer } from '../GeneralContainer/GeneralContainer'
import { Navbar } from '../Navbar/Navbar'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.normal}>
      <GeneralContainer>
        <div className={styles.container}>
          <Navbar />
          <ThemeSwitcher />
        </div>
      </GeneralContainer>
    </header>
  )
}
