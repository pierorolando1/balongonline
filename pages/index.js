import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {

  const [partidos, setPartidos] = useState(
    [


      {
        "titulo": "Bayern vs Lazio",
        "links": [
          {
            "link": "bayern-munich-vs-ss-lazio-stream-1",
          },
          {
            "link": "bayern-munich-vs-ss-lazio-stream-2",
          },
          {
            "link": "bayern-munich-vs-ss-lazio-stream-3",
          },
        ]
      },




      {
        "titulo": "Chelsea vs Atletico de Madrid",
        "links": [
          {
            "link": "chelsea-vs-atletico-de-madrid-stream-1",
          },
          {
            "link": "chelsea-vs-atletico-de-madrid-stream-2",
          },
          {
            "link": "chelsea-vs-atletico-de-madrid-stream-3",
          },
        ]
      },




      {
        "titulo": "Torino vs Sassuolo",
        "links": [
          {
            "link": "torino-fc-vs-sassuolo-stream-1",
          },
          {
            "link": "torino-fc-vs-sassuolo-stream-2",
          },
          {
            "link": "torino-fc-vs-sassuolo-stream-3",
          },
        ]
      },


    ]

  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Balong Online Futbol</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>


        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: '100%', height: '100vh', padding: '5%' }}>

        {
          partidos.map(partido => {
            return (
              <div className="list-group mt-4">
                <button type="button" className="list-group-item list-group-item-action active">
                  {partido.titulo}
                </button>
                {
                  partido.links.map((link, i) => {
                    return (
                      <>
                        <Link href={ `${ '/games/' + link.link}` }><a type="button" className="list-group-item list-group-item-action">Link { i+1 }</a></Link>
                      </>
                    )
                  })
                }
              </div>
            )
          })
        }

        {/* <div className="list-group">
          <button type="button" className="list-group-item list-group-item-action active">
            Chelsea vs Atletico de Madrid
          </button>
          <Link href="/games/chelsea-vs-atletico-de-madrid-stream-1"><a type="button" className="list-group-item list-group-item-action">Link 1</a></Link>
          <Link href="/games/chelsea-vs-atletico-de-madrid-stream-2"><a type="button" className="list-group-item list-group-item-action">Link 2</a></Link>
          <Link href="/games/chelsea-vs-atletico-de-madrid-stream-3"><a type="button" className="list-group-item list-group-item-action">Link 3</a></Link>
        </div>

        <div class="list-group mt-4">
          <button type="button" class="list-group-item list-group-item-action active">
            Bayern Munich vs Lazio
          </button>
          <Link href="/games/bayern-munich-vs-ss-lazio-stream-1"><a type="button" className="list-group-item list-group-item-action">Link 1</a></Link>
          <Link href="/games/bayern-munich-vs-ss-lazio-stream-2"><a type="button" className="list-group-item list-group-item-action">Link 2</a></Link>
          <Link href="/games/bayern-munich-vs-ss-lazio-stream-3"><a type="button" className="list-group-item list-group-item-action">Link 3</a></Link>
        </div>

        <div class="list-group mt-4">
          <button type="button" class="list-group-item list-group-item-action active">
            Torino FC vs Sassuolo
          </button>
          <Link href="/games/torino-fc-vs-sassuolo-stream-1"><a type="button" className="list-group-item list-group-item-action">Link 1</a></Link>
          <Link href="/games/torino-fc-vs-sassuolo-stream-2"><a type="button" className="list-group-item list-group-item-action">Link 2</a></Link>
          <Link href="/games/torino-fc-vs-sassuolo-stream-3"><a type="button" className="list-group-item list-group-item-action">Link 3</a></Link>
        </div> */}


      </main>

    </div>
  )
}
