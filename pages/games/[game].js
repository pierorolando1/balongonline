import { useRouter } from "next/router"

import React from 'react'

export default function Game () {

    const router = useRouter()
    const { game } = router.query

    return (
        <div>
            { /*real-madrid-vs-atalanta-bc-stream-3*/ }
            <iframe style={{margin: 'auto'}} height="720" width="1280" className="embed-responsive-item" src={ `https://embedstream.me/${ game }` } allowFullScreen ></iframe>
        </div>
    )
}
