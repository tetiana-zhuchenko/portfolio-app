import styles from './MyLogo.module.css'

export const MyLogo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>Tetiana Zhuchenko</h3>
      <p className={styles.specialty}>FrontEnd Developer</p>
    </div>
  )
}
