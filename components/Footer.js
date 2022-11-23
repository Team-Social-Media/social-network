import styles from '../styles/Footer.module.css'
import Image from 'next/image';

const Footer = () => {

  let image = `https://picsum.photos/450/150?random`;

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container} >
          <Image src={image} alt='picsum image' width='450' height='150' />
          <h1>Your Ad Here</h1>
        </div>
      </footer>
    </>
  )
}


export default Footer;
