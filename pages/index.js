import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Balong Online Futbol</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>


        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: '100%', height: '100vh', padding: '0' }}>
        {/* <iframe style={{margin: 'auto'}} height="720" width="1280" className="embed-responsive-item" src='https://embedstream.me/real-madrid-vs-atalanta-bc-stream-3' allowFullScreen ></iframe> */}
        
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action active">
            Real Madrid vs Atalanta
          </button>
          <a href="/games/real-madrid-vs-atalanta-bc-stream-1" type="button" className="list-group-item list-group-item-action">Link 1</a>
          <a href="/games/real-madrid-vs-atalanta-bc-stream-2" type="button" className="list-group-item list-group-item-action">Link 2</a>
          <a href="/games/real-madrid-vs-atalanta-bc-stream-3" type="button" className="list-group-item list-group-item-action">Link 3</a>
        </div>
      
      </main>

    </div>
  )
}
