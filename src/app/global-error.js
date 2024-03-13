'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div>
                    <p>Algo salió mal.</p>
                    <hr />
                    <button onClick={() => reset()}>Reintentar</button>
                </div>
            </body>
        </html>
    )
}