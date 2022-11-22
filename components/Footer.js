import styles from '../styles/Footer.module.css'
import { useState } from 'react';
import Image from 'next/image';

const Footer = () => {

  let adHeight;
  let adWidth;

  if (typeof window !== 'undefined') {
    adWidth = Math.ceil(window.screen.availWidth / 10) || 300;
    adHeight = Math.ceil(window.screen.availHeight / 50) || 200;
  }

  let image = () => `https://picsum.photos/450/150?random=1.jpg`;
  console.log('footer image: ', image)

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container} >
          <Image src={image} alt='picsum image' width='450' height='150' />
          <h1>Your Add Here</h1>
        </div>
      </footer>
    </>
  )
}


export default Footer;