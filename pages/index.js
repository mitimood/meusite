import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>Bem vindo</div>
      <Image
      className={styles.lontra}
      width={500}
      height={500}
      src='/lontra_guitarra.jpg'
      objectPosition="center"
      />
      <div className={styles.teamo}>Te amo</div>
    </div>

  )
}
