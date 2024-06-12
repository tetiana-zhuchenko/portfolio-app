import { GeneralContainer } from '../GeneralContainer/GeneralContainer'
import { MyLogo } from '../MyLogo/MyLogo'
import { Navbar } from '../Navbar/Navbar'
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.css'

// add active state to navLinks
export const Header = () => {
  return (
    <header className={styles.normal}>
      <GeneralContainer>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <MyLogo />
            <ThemeSwitcher />
            <SocialMediaLinks />
          </div>
          <div className={styles.navWrapper}>
            <Navbar />
          </div>
        </div>
      </GeneralContainer>
    </header>
  )
}
