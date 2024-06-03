import styles from './SocialMediaLink.module.css'

type TSocialMediaLink = {
  linkInfo: { title: string; url: string; icon: string }
}

export const SocialMediaLink = ({ linkInfo }: TSocialMediaLink) => {
  return (
    <li>
      <a
        href={
          linkInfo.title === 'Email' ? `mailto:${linkInfo.url}` : linkInfo.url
        }
        target="_blank"
      >
        <img src={linkInfo.icon} alt="test" />
      </a>
    </li>
  )
}
