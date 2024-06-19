import styles from './ThemeIcon.module.css'
import { initialThemes } from 'src/app/data/initialThemes'

type TThemeIcon = {
  isLight: boolean
  isActiveDark: boolean
  handleThemeBtnClick: () => void
}

export const ThemeIcon = ({
  isLight,
  isActiveDark,
  handleThemeBtnClick,
}: TThemeIcon) => {
  // const isActiveDark = false
  const isActive = true
  const dark = initialThemes[0]
  const light = initialThemes[1]
  return (
    <button
      type="button"
      onClick={handleThemeBtnClick}
      className={styles.normal}
    >
      {isLight ? (
        <img
          className={styles.icon}
          src={isActiveDark ? light.inactiveIcon : light.activeIcon}
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
