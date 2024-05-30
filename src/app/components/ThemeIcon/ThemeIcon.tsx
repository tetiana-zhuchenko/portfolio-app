import styles from './ThemeIcon.module.css'
import { initialThemes } from 'src/app/data/initialThemes'

type TThemeIcon = {
  isLight: boolean
}

export const ThemeIcon = ({ isLight }: TThemeIcon) => {
  const isActiveDark = false
  const isActiveLight = true
  const dark = initialThemes[0]
  const light = initialThemes[1]
  return (
    <button type="button" className={styles.normal}>
      {isLight ? (
        <img
          className={styles.icon}
          src={isActiveLight ? light.activeIcon : light.inactiveIcon}
          alt={dark.title}
        />
      ) : (
        <img
          className={styles.icon}
          src={isActiveDark ? dark.activeIcon : dark.inactiveIcon}
          alt={dark.title}
        />
      )}
    </button>
  )
}
