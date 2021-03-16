import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Balong Online Futbol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe src='https://embedstream.me/real-madrid-vs-atalanta-bc-stream-3' width='100%' height='100%' scrolling='no' frameborder='0' allowfullscreen="1" allowtransparency="1" referrerpolicy='unsafe-url'></iframe>
      </main>

    </div>
  )
}
