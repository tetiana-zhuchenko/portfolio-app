import { GeneralContainer } from '../GeneralContainer/GeneralContainer'
import { MyLogo } from '../MyLogo/MyLogo'
import { Navbar } from '../Navbar/Navbar'
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.normal}>
      <GeneralContainer>
        <div className={styles.container}>
          <SocialMediaLinks />
          <MyLogo />
          <Navbar />
          <ThemeSwitcher />
        </div>
      </GeneralContainer>
    </header>
  )
}
