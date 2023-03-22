import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import styles from './Footer.module.css'

function Footer() {
  return(
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><a href='https://github.com/sabatinirafa' target='_blank'><FaGithub/></a></li>
        <li><a href='https://www.linkedin.com/in/rafael-sabatini-41819a1b2/' target='_blank'><FaLinkedin/></a></li>
        <li><a href='mailto:rafa.sabatini@yahoo.com.br' ><MdEmail/></a></li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer