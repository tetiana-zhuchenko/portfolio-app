import { SocialMediaLink } from '../SocialMediaLink/SocialMediaLink'
import { initialSocialMediaLinks } from 'src/app/data/initialSocialMediaLinks'

import styles from './SocialMediaLinks.module.css'

export const SocialMediaLinks = () => {
  return (
    <ul className={styles.container}>
      {initialSocialMediaLinks.map((linkInfo) => (
        <SocialMediaLink key={linkInfo.title} linkInfo={linkInfo} />
      ))}
    </ul>
  )
}
