import Image from 'next/image'
import Title from './components/Title/Title'
import errImg from './assets/icons/errImg.svg'
import styles from './not-found.module.css'
import Button from './components/Button/Button'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.containerNotFond}>
        <Image width={135} height={135} src={errImg} alt="icon" />
        <Title text={'Not Found Page'} />
        <p className={styles.text}>Could not find requested resource</p>
        <Button title={'Home Page'} href={'/'} />
      </div>
    </main>
  )
}
