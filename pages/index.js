import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLontra}>
      <Image
      className={styles.lontra}

      src='/lontra_guitarra.jpg'
      objectPosition="center"
      layout="fill"   
      objectFit='contain'
      />
      </div>

    </div>

  )
}
