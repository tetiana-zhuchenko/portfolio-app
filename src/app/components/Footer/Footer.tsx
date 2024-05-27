import { GeneralContainer } from '../GeneralContainer/GeneralContainer'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.normal}>
      <GeneralContainer>
        <div className={styles.container}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium assumenda accusamus illo, quaerat labore pariatur rerum
            est asperiores adipisci iure voluptatem odio dignissimos ea
            voluptatum. Dicta vitae temporibus iste autem?
          </p>
        </div>
      </GeneralContainer>
    </footer>
  )
}
