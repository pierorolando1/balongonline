import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {NextSeo} from 'next-seo'


export default function Home() {

  const [partidos, setPartidos] = useState(
    [


      {
        "titulo": "Cajamarca vs Manucci",
        "links": [
          {
            "link": "cajamarca-vs-carlos-mannucci-stream-1",
          },
          {
            "link": "cajamarca-vs-carlos-mannucci-stream-2",
          },
        ]
      },




      {
        "titulo": "FCB Melgar vs melgar",
        "links": [
          {
            "link": "fc-melgar-vs-melgar-stream-1",
          },
          {
            "link": "fc-melgar-vs-melgar-stream-2",
          },
          {
            "link": "fc-melgar-vs-melgar-stream-3",
          },
        ]
      },




      {
        "titulo": "Carlos Stein vs Dep. Municipal",
        "links": [
          {
            "link": "carlos-stein-vs-dep-municipal-stream-1",
          },
          {
            "link": "carlos-stein-vs-dep-municipal-stream-2",
          },
          {
            "link": "carlos-stein-vs-dep-municipal-stream-3",
          },
        ]
      },


      {
        "titulo": "FC Shakhtar Donetsk vs AS Roma",
        "links": [
          {
            "link": "fc-shakhtar-donetsk-vs-as-roma-stream-1",
          },
          {
            "link": "fc-shakhtar-donetsk-vs-as-roma-stream-2",
          },
          {
            "link": "fc-shakhtar-donetsk-vs-as-roma-stream-3",
          },
        ]
      },

      {
        "titulo": "Celta de Vigo vs Real Madrid",
        "links": [
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-1",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-2",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-3",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-4",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-5",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-6",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-7",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-8",
          },
          {
            "link": "celta-de-vigo-vs-real-madrid-stream-9",
          },
        ]
      },

      {
        "titulo": "Carlos Mannucci vs FBC Melgar",
        "links": [
          {
            "link": "carlos-mannucci-vs-fbc-melgar-stream-1",
          },
          {
            "link": "carlos-mannucci-vs-fbc-melgar-stream-2",
          },
          {
            "link": "carlos-mannucci-vs-fbc-melgar-stream-3",
          },
          {
            "link": "carlos-mannucci-vs-fbc-melgar-stream-4",
          },
          {
            "link": "carlos-mannucci-vs-fbc-melgar-stream-5",
          },
          {
            "link": "carlos-mannucci-vs-fbc-melgar-stream-6",
          },
        ]
      },

    ]

  )

  return (
    <div className={styles.container}>
      
    <NextSeo
      title="Balong Online Futbol"
      description="Partidos en vivo de las grandes ligas y competiciones."
      openGraph={{
        url: 'https://balongonline.vercel.app',
        title: 'Partidos en vivo',
        description: 'Partidos en vivo de las grandes ligas y competiciones',
        images: [
          {
            url: 'https://resources.evertonfc.com/photo-resources/2021/01/16/0ca666e4-3e8d-4942-92dc-628a537e1762/jp.jpg?width=900&height=506',
            width: 900,
            height: 506,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://www.futbolred.com/files/article_main/files/crop/uploads/2018/12/02/5c042bc4e3597.r_1554207092567.0-0-1890-945.jpeg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
        ],
        site_name: 'Balong Online',
      }}
    />
      <Head>
        <title>Balong Online Futbol</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
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
