import { GeneralContainer } from '../GeneralContainer/GeneralContainer'
import { MyLogo } from '../MyLogo/MyLogo'
import { Navbar } from '../Navbar/Navbar'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.css'

// add social media in the centre
// add "Tetiana Zhuchenko FrontEnd Developer"
export const Header = () => {
  return (
    <header className={styles.normal}>
      <GeneralContainer>
        <div className={styles.container}>
          <MyLogo />
          <Navbar />
          <ThemeSwitcher />
        </div>
      </GeneralContainer>
    </header>
  )
}
