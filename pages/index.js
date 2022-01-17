import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <h1>
                Olá Semana FSM
            </h1>
            <Link href='sobre'>
                Sobre
            </Link>
            <Link href='contato'>
                Contato
            </Link>
            <Link href='pesquisa'>
                Pesquisa
            </Link>
        </div>
    )
}

export default Index