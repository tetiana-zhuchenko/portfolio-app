import { Project } from '../components/Project/Project'
import styles from './page.module.css'

const Projects = () => {
  return (
    <main className={styles.main}>
      <h1>Projects</h1>
      <Project />
    </main>
  )
}

export default Projects
