import { useRouter } from "next/router"
import Head from 'next/head'

import React from 'react'

export default function Game () {

    const router = useRouter()
    const { game } = router.query

    return (
        <>
        <Head>
            <title>Balong Online Futbol</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
            {/* <!-- JavaScript Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
        </Head>
            <div>
                { /*real-madrid-vs-atalanta-bc-stream-3*/ }
                <iframe style={{margin: 'auto'}} height="720" width="1280" className="embed-responsive-item" src={ `https://embedstream.me/${ game }` } allowFullScreen ></iframe>
            </div>
        </>
    )
}
