import styles from './GeneralContainer.module.css'

export const GeneralContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <div className={styles.normal}>{children}</div>
}
