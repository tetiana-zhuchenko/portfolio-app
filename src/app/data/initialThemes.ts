import themeDarkActive from '../assets/themeIcons/theme-dark-active.png'
import themeDarkInactive from '../assets/themeIcons/theme-dark-inactive.png'
import themeLightActive from '../assets/themeIcons/theme-light-active.png'
import themeLightInactive from '../assets/themeIcons/theme-light-inactive.png'

export const initialThemes = [
  {
    title: 'dark',
    activeIcon: `${themeDarkActive.src}`,
    inactiveIcon: `${themeDarkInactive.src}`,
  },
  {
    title: 'light',
    activeIcon: `${themeLightActive.src}`,
    inactiveIcon: `${themeLightInactive.src}`,
  },
]
