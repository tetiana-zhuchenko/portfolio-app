import Image from 'next/image'
import openTableImg from '../../assets/projectsImages/image.png'
import styles from './Project.module.css'
import Button from '../Button/Button'

// add active class for links and mabey add background as bookmarker (backing)

// {
//   id: 1,
//   title: 'OpenTable (Table Booking Replica)',
//   url: 'https://open-table-next-js-sand.vercel.app/',
//   codeUrl: 'https://github.com/tetiana-zhuchenko/openTableNextJS',
//   usageVideoUrl: '',
//   stack: [
//     'Next.js',
//     'Node.js',
//     'TypeScript',
//     'JavaScript',
//     'HTML',
//     'CSS',
//     'Tailwind',
//     'PostgreSQL',
//     'Prisma ORM',
//   ],
//   about: "I'm actively working on a replica of the renowned table booking platform, OpenTable. Leveraging my frontend development skills and a robust technology stack, I am dedicated to recreating the seamless and user-friendly experience provided by       OpenTable. Currently addressing post-deployment functionality issues to ensure a flawless user experience.",
// }

export const Project = () => {
  return (
    <article className={styles.container}>
      <Image src={openTableImg} width={276} height={250} alt={'logo'} />
      <h1 className={styles.title}>OpenTable (Table Booking Replica)</h1>
      <p className={styles.bio}>
        "I'm actively working on a replica of the renowned table booking
        platform, OpenTable. Leveraging my frontend development skills and a
        robust technology stack, I am dedicated to recreating the seamless and
        user-friendly experience provided by OpenTable. Currently addressing
        post-deployment functionality issues to ensure a flawless user
        experience."
      </p>
      <div className={styles.btnWrapper}>
        <Button
          href="https://open-table-next-js-sand.vercel.app/"
          title="Code"
        />
        <Button
          href="https://open-table-next-js-sand.vercel.app/"
          title="Website"
        />
        <Button
          href="https://open-table-next-js-sand.vercel.app/"
          title="Demo"
        />
      </div>
    </article>
  )
}
