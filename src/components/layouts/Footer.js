import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import styles from './Footer.module.css'

function Footer() {
  return(
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaGithub/></li>
        <li><FaLinkedin/></li>
        <li><MdEmail/></li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer