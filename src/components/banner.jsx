import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <section className='banner flex'>
            <div className='banner-content'>
                <h1 className='soluciones'>Soluciones IT</h1>
                <h1 className='grupo'>Grupo de Desarrolladores <br /><span>independientes</span></h1>
                <button>Contactanos</button>
            </div>
        </section>
    )
}

export default Banner
